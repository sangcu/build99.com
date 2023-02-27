"use client";

import Link from "next/link";
import { Button } from "@/components/atoms";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import FormImageUpload from "@/components/forms/FormImageUpload";
import { useRouter } from "next/navigation";
import useAddTeamMember from "@/hooks/useAddTeamMember";

export default function Home() {
  const router = useRouter();
  const schema = yup.object().shape({
    name: yup.string().required("Please input the team member name"),
    jobTitle: yup.string().required("Please input job title"),
  });

  const { onMutate } = useAddTeamMember();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    const { name, jobTitle, notes, profileImage } = values;
    await onMutate({
      name,
      job_title: jobTitle,
      profile_photo: profileImage,
      notes,
    });

    router.push("/");
  };

  return (
    <div className="mt-8 flex items-center justify-center w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium leading-6 text-gray-900">
              Create New Member
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              By default, personal data information is only saved in your
              machine.
            </p>
          </div>
          <FormImageUpload
            name="profileImage"
            label="Profile photo"
            control={control}
            error={errors.profileImage}
          />
          <FormInput
            label="Name"
            name="name"
            control={control}
            error={errors.name}
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
            error={errors.note}
          />
          <div className="flex justify-end space-x-2">
            <Link href="/">
              <Button variant="white">Cancel</Button>
            </Link>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
