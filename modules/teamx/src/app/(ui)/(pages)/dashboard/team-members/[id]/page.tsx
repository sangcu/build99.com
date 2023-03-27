"use client";

import useQueryTeamInfo from "@/app/(ui)/hooks/useQueryTeamInfo";
import useQueryTeamMemberDetail from "../hooks/useQueryTeamMemberDetail";
import { toModel } from "@/app/(ui)/models/team-members";
import Image from "next/image";
import { Loading } from "@/app/(ui)/components/atoms";
import {
  ArrowLongLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const TeamMemberDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const {
    data: teamInfo,
    isLoading: isLoadingTeamInfo,
    isError: isFetchTeamInfoError,
  } = useQueryTeamInfo();

  const { data, isLoading, isError } = useQueryTeamMemberDetail(
    teamInfo?.id,
    id
  );
  const memberDetail = data ? toModel(data) : undefined;
  const { name, profilePhoto, jobTitle, email, notes } = memberDetail || {};

  if (isLoading || isLoadingTeamInfo)
    return <Loading containerClassName="my-20" />;

  if (isError || isFetchTeamInfoError)
    return (
      <div className="mt-12 text-center text-red-600 text-lg font-semibold">
        Something went wrong on loading team members
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 sm-px-4">
      <div className="flex items-center space-x-5 mt-6">
        <div className="flex items-center space-x-5">
          <ChevronLeftIcon
            className="h-6 w-6 text-gray-600 cursor-pointer"
            onClick={() => router?.back()}
          />

          <div className="flex-shrink-0">
            <div className="relative">
              {profilePhoto ? (
                <Image
                  width={64}
                  height={64}
                  className="mx-auto h-16 w-16 rounded-full"
                  src={profilePhoto}
                  alt=""
                />
              ) : (
                <div className="flex items-center w-full justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                </div>
              )}
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-sm font-medium text-gray-500">{jobTitle}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 items-start lg:grid-cols-5 lg:gap-8">
        <div className="p-6 bg-white overflow-hidden rounded-lg shadow col-span-2">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Job Title</dt>
              <dd className="mt-1 text-sm text-gray-900">{jobTitle}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{email}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Note</dt>
              <dd className="mt-1 text-sm text-gray-900">{notes}</dd>
            </div>
          </dl>
        </div>
        <div className="hidden p-6 bg-white overflow-hidden rounded-lg shadow h-80 lg:flex items-center justify-center col-span-3">
          <div className="text-gray-400">will display overview chart here</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
