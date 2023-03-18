import { Control } from "react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";

import { TeamMemberSelect } from "@/app/(ui)/components/atoms";
import { TeamMemberSelectProps } from "@/app/(ui)/components/atoms/TeamMemberSelect";

interface FormTeamMemberSelectProps extends TeamMemberSelectProps {
  control?: Control<any>;
  name: string;
  defaultValue?: string;
  error?: any;
  controllerProps?: any;
}

const FormTeamMemberSelect = ({
  controllerProps,
  control,
  name,
  type,
  label,
  defaultValue,
}: FormTeamMemberSelectProps) => {
  return (
    <div className="flex items-end w-full">
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TeamMemberSelect
            label={label}
            type={type}
            selectedTeamMemberIds={value as number[]}
            onChanged={onChange}
          />
        )}
        name={name}
        defaultValue={defaultValue}
        {...controllerProps}
      />
    </div>
  );
};

export default FormTeamMemberSelect;
