"use client";

import Link from "next/link";
import { Button } from "@/app/(ui)/components/atoms";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "@/app/(ui)/components/forms/FormInput";
import FormImageUpload from "@/app/(ui)/components/forms/FormImageUpload";
import { useRouter } from "next/navigation";
import useAddTeamMember from "@/app/(ui)/(pages)/dashboard/team-members/hooks/useAddTeamMember";
import { TeamMember } from "@/app/(ui)/models/team-members/types";
import toDto from "@/app/(ui)/models/team-members/toDto";
import useQueryTeamInfo from "@/app/(ui)/hooks/useQueryTeamInfo";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function CreateNewMember() {
  const router = useRouter();
  const schema = yup.object().shape({
    name: yup.string().required("Please input the team member name"),
    jobTitle: yup.string().required("Please input job title"),
    email: yup
      .string()
      .required("Please input email")
      .email("Please input valid email"),
  });
  const { data } = useQueryTeamInfo();

  const { mutate: addTeamMember, isLoading } = useAddTeamMember(() =>
    router.push("/dashboard/team-members")
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamMember>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: TeamMember) => {
    await addTeamMember({
      teamId: data?.id,
      member: toDto(values),
    });
  };

  return (
    <div className="mt-8 flex items-center justify-center w-full px-4 lg:px-0">
      <div>
        <div className="flex space-x-4 items-center">
          <div
            className="rounded-md bg-white p-2 cursor-pointer"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-medium leading-6 text-gray-900">
            Create New Member
          </h1>
        </div>
        <div className="mt-6 p-6 bg-white overflow-hidden rounded-lg shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <FormImageUpload
                name="profilePhoto"
                label="Profile photo"
                control={control}
                error={errors.profilePhoto}
              />
              <FormInput
                label="Name"
                name="name"
                control={control}
                error={errors.name}
              />
              <FormInput
                label="Email"
                name="email"
                control={control}
                error={errors.email}
              />
              <FormInput
                label="Job Title"
                name="jobTitle"
                control={control}
                error={errors.jobTitle}
              />

              <FormInput
                label="Notes"
                name="notes"
                isMultipleLine
                control={control}
                error={errors.notes}
              />
              <div className="flex justify-end space-x-2">
                <Link href="/">
                  <Button variant="white" className="w-20">
                    Cancel
                  </Button>
                </Link>
                <Button loading={isLoading} type="submit" className="w-20">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
