import classNames from "classnames";
import Button from "../Button";
import { useEffect, useRef } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import toBase64 from "@/utils/toBase64";

export interface ImageUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClassNames?: string;
  label?: string | React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  onChanged?: (value: string) => void;
}

const ImageUpload: React.FunctionComponent<ImageUploadProps> = ({
  label,
  labelClassNames,
  value,
  onChanged,
  isError = false,
  errorMessage,
  containerClassName,
}) => {
  const inputFileRef = useRef<any>(null);

  const handlePasted = async (evt: ClipboardEvent) => {

    if (evt?.clipboardData?.files?.length == 0) {
      return;
    }

    const file = evt?.clipboardData?.files[0];
    if (!file || !file.type?.startsWith('image/')) return;

    if (!file) return;

    const base64Value = await toBase64(file as File);
    onChanged && onChanged(base64Value as string);
  };

  useEffect(() => {
    document.addEventListener("paste", handlePasted);

    return () => document.removeEventListener("paste", handlePasted);
  }, []);

  const onFileChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const value = await toBase64(file);
    onChanged && onChanged(value as string);
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label
          className={classNames(
            "mb-1 block text-sm font-medium text-gray-700",
            labelClassNames
          )}
        >
          {label}
        </label>
      )}
      <div className="space-y-4">
        <input
          className="hidden"
          ref={inputFileRef}
          onChange={onFileChanged}
          type="file"
          accept="image/png, image/jpeg"
        ></input>
        {value && (
          <div className="w-36">
            <Image
              width={240}
              height={240}
              className="mx-auto h-24 w-24 rounded-full"
              src={value as string}
              alt=""
            />
          </div>
        )}
        <div className="block lg:flex space-y-2 items-center space-x-2">
          <Button
            className="!w-36 w-full whitespace-nowrap focus:ring-transparent !text-xs"
            variant="white"
            onClick={() => inputFileRef?.current?.click()}
          >
            <ArrowUpTrayIcon className="block h-4 w-4" aria-hidden="true" />
            <span className="ml-2">Upload Image</span>
          </Button>
          <div className="text-sm">
            or <span className="font-bold">Ctrl + V</span> to paste the photo.
          </div>
        </div>
      </div>
      {isError && errorMessage && (
        <p className="mt-2 text-xs text-error">{errorMessage}</p>
      )}
    </div>
  );
};

export default ImageUpload;
