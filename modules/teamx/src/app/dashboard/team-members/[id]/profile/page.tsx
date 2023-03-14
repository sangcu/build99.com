"use client";
import { toModel } from "@/models/team-members";
import useQueryTeamMemberDetail from "../../hooks/useQueryTeamMemberDetail";

const MemberDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  const { data } = useQueryTeamMemberDetail(id);
  const memberDetail = data ? toModel(data) : undefined

  const { name, jobTitle, notes } = memberDetail || {};

  return (
    <div className="sm:ml-6 sm:mr-6 mr-4 lg:mr-0 ml-4 lg:ml-8 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Name</dt>
          <dd className="mt-1 text-sm text-gray-900">{name}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Job Title</dt>
          <dd className="mt-1 text-sm text-gray-900">{jobTitle}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">Note</dt>
          <dd className="mt-1 text-sm text-gray-900">{notes}</dd>
        </div>
      </dl>
    </div>
  );
};

export default MemberDetail;
