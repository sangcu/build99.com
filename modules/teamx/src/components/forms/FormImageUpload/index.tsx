import { InputProps } from "@/components/atoms/Input";
import { Control } from "react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";

import { ImageUpload } from "@/components/atoms";

interface FormInputProps extends InputProps {
  control?: Control<any>;
  name: string;
  defaultValue?: string;
  error?: any;
  controllerProps?: any;
}

const FormInput = ({
  controllerProps,
  control,
  name,
  defaultValue,
  error,
  ...rest
}: FormInputProps) => {
  return (
    <div className="flex items-end">
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ImageUpload
            {...rest}
            value={value as string}
            onBlur={onBlur}
            onChanged={onChange}
            isError={!!error}
            errorMessage={error?.message}
          />
        )}
        name={name}
        defaultValue={defaultValue}
        {...controllerProps}
      />
    </div>
  );
};

export default FormInput;
