import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/atoms";

import FormInput from "@/components/forms/FormInput";
import Link from "next/link";
import useAddTeamInfo from "@/hooks/useAddTeamInfo";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TeamInfoForm: React.FC = () => {
  const [isAddingDefaultValue, setAddingDefaultValue] = useState(false);
  const { mutate: onAddTeamMember, isLoading } = useAddTeamInfo(() => {
    setAddingDefaultValue(false);
    router.push("/dashboard/teams");
  });
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup.string().required("Please input the team name"),
    note: yup.string().required("Please input the team description"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value: any) => {
    setAddingDefaultValue(false);
    onAddTeamMember(value);
  };

  const onCancel = () => {
    setAddingDefaultValue(true);
    onAddTeamMember({
      name: "Click here to edit your team name",
      note: "Click here to edit your team description",
    });
  };

  return (
    <div className="p-4 flex items-center justify-center lg:p-8">
      <div className="lg:w-96">
        <div className="text-center">
          <h2 className="text-2xl font-medium leading-6 text-gray-900">
            Your first time at yLeader?
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Please input your team information here
          </p>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6 w-full">
            <FormInput
              label="Team Name"
              name="name"
              control={control}
              error={errors.name}
            />
            <FormInput
              label="Team Description"
              name="note"
              control={control}
              error={errors.note}
            />
          </div>
          <div className="mt-6 flex justify-center space-x-2">
            <Link href="/dashboard">
              <Button
                className="!w-28"
                variant="white"
                onClick={onCancel}
                loading={isLoading && isAddingDefaultValue}
              >
                Skip
              </Button>
            </Link>
            <Button
              className="!w-28"
              type="submit"
              loading={isLoading && !isAddingDefaultValue}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamInfoForm;
