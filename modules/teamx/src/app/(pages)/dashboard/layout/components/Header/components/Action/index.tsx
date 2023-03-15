import { Button } from "@/app/components/atoms";
import { useRouter } from "next/navigation";

interface ActionProps {
  isExporting: boolean;
  onExport: () => void;
}

const Action: React.FC<ActionProps> = ({ isExporting, onExport }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-end">
      <div className="flex space-x-2">
        <Button
          variant="white"
          className="!w-20 !border-0 !hover:bg-gray-100"
          onClick={() => router?.push("/dashboard/import-profile")}
        >
          Import
        </Button>
        <Button
          variant="white"
          className="!w-20 !border-0 !hover:bg-gray-100"
          loading={isExporting}
          onClick={onExport}
        >
          Export
        </Button>
      </div>
    </div>
  );
};

export default Action;
