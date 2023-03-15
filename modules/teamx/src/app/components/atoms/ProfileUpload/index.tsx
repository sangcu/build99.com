import { useRef } from "react";
import FileUpload from "../FileUpload";
import Loading from "../Loading";

interface ProfileUploadProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  onChanged: (value: string) => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({
  isLoading,
  isError,
  errorMessage,
  onChanged,
}) => {
  const inputFileRef = useRef<any>(null);

  return (
    <div>
      <FileUpload
        inputFileRef={inputFileRef}
        onChanged={onChanged}
        acceptTypes="application/JSON"
      />
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={() => inputFileRef?.current?.click()}
      >
        <div className="w-48 h-48 border-gray-300 border-2 border-gray-200 border-dashed flex items-center justify-center p-8">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="text-center">Click here to import</div>
          )}
        </div>
      </div>
      {isError && (
        <div className="mt-4 text-center text-red-500">
          {errorMessage ||
            "There are something wrong on importing your profile"}
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
