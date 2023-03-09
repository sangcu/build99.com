import { Button } from "@/components/atoms";
import ProfileUpload from "@/components/atoms/ProfileUpload";
import useImportTeamProfile from "@/hooks/useImportTeamProfile";
import { useRouter } from "next/navigation";

interface ImportProfileProps {
  onCancel: () => void;
}

const ImportProfile: React.FC<ImportProfileProps> = ({ onCancel }) => {
  const router = useRouter();
  const {
    mutate: onImportProfile,
    isLoading,
    isError,
    error,
  } = useImportTeamProfile(() => router.push("/dashboard/team-members"));

  return (
    <div>
      <div className="mt-8">
        <h2 className="text-center text-2xl font-medium leading-6 text-gray-900">
          Import your data if you have used in other machine?
        </h2>
      </div>
      <div className="mt-8">
        <ProfileUpload
          isLoading={isLoading}
          isError={isError}
          errorMessage={error?.message}
          onChanged={(value: string) =>
            onImportProfile({ jsonString: value, override: true })
          }
        />
      </div>
      <div className="mt-8 w-full text-center">
        <Button
          onClick={onCancel}
          className="!px-6 !py-4 !text-lg"
          variant="white"
          disable={isLoading}
        >
          {"No, Let me create new team."}
        </Button>
      </div>
    </div>
  );
};

export default ImportProfile;
