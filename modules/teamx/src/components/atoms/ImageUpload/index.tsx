import classNames from "classnames";
import Button from "../Button";
import { useRef } from "react";
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
      <div className="space-y-2 w-36">
        <input
          className="hidden"
          ref={inputFileRef}
          onChange={onFileChanged}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        ></input>
        {value && (
          <Image
            width={240}
            height={240}
            className="mx-auto h-24 w-24 rounded-full"
            src={value as string}
            alt=""
          />
        )}
        <Button
          className="!w-36 w-full whitespace-nowrap focus:ring-transparent !text-xs"
          variant="white"
          onClick={() => inputFileRef?.current?.click()}
        >
          <ArrowUpTrayIcon className="block h-4 w-4" aria-hidden="true" />
          <span className="ml-2">Upload Image</span>
        </Button>
      </div>
      {isError && errorMessage && (
        <p className="mt-2 text-xs text-error">{errorMessage}</p>
      )}
    </div>
  );
};

export default ImageUpload;
