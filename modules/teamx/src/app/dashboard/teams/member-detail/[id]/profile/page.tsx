"use client";
import { Loading } from "@/components/atoms";
import useQueryTeamMemberDetail from "@/hooks/useQueryTeamMemberDetail";
import classNames from "classnames";
import Image from "next/image";

const MemberDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  const { isLoading, data, isError } = useQueryTeamMemberDetail(id);

  const { profile_photo, name, job_title, notes } = data || {};

  return (
    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Name</dt>
        <dd className="mt-1 text-sm text-gray-900">{name}</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Job Title</dt>
        <dd className="mt-1 text-sm text-gray-900">{job_title}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-sm font-medium text-gray-500">Note</dt>
        <dd className="mt-1 text-sm text-gray-900">{notes}</dd>
      </div>
    </dl>
  );
};

export default MemberDetail;
