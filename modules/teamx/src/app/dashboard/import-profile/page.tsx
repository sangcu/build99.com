"use client";

import ProfileUpload from "@/components/atoms/ProfileUpload";
import useImportTeamProfile from "@/hooks/useImportTeamProfile";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNewMember() {
  const router = useRouter();
  const {
    mutate: onImportProfile,
    isLoading,
    isError,
    error,
  } = useImportTeamProfile(() => router.push("/dashboard/teams"));

  const [isOverride, setIsOverride] = useState(false);

  return (
    <div className="mt-20 w-full">
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Import Profile
      </h1>

      <div className="mt-8 flex flex-col items-center">
        <div className="px-8 lg:px-0 relative flex items-start mb-4">
          <div className="flex h-5 items-center">
            <input
              onChange={(event) => setIsOverride(event.target.checked)}
              id="overrideCheck"
              aria-describedby="override-check"
              name="override"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="overrideCheck"
              className="font-medium text-gray-700"
            >
              Override only
            </label>
            <span id="override-check" className="text-gray-500">
              <span className="sr-only">Override only </span> this remove your
              current members and load all new members from your file.
            </span>
          </div>
        </div>
        <ProfileUpload
          isLoading={isLoading}
          isError={isError}
          errorMessage={error?.message}
          onChanged={(value: string) =>
            onImportProfile({ jsonString: value, override: isOverride })
          }
        />
      </div>
    </div>
  );
}
