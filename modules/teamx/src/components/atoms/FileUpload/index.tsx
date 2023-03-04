import { MutableRefObject } from "react";
import toBase64 from "@/utils/toBase64";

interface FileUploadProps {
  acceptTypes: string;
  inputFileRef: MutableRefObject<any>;
  onChanged?: (value: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  inputFileRef,
  onChanged,
  acceptTypes,
}) => {
  const onFileChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const value = await toBase64(file);
    onChanged && onChanged(value as string);
  };

  return (
    <input
      className="hidden"
      ref={inputFileRef}
      onChange={onFileChanged}
      type="file"
      accept={acceptTypes}
    />
  );
};

export default FileUpload;
