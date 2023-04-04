"use client";
import { useRouter } from "next/navigation";
import { team_members } from "../exampleData";

const TeamMemberDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const selectedMember = team_members.find(
    (member) => member.id === Number(id)
  );

  return (
    <div className="px-4 mt-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Name</dt>
          <dd className="mt-1 text-sm text-gray-900">{selectedMember?.name}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Job Title</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {selectedMember?.jobTitle}
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Email</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {selectedMember?.email}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">Note</dt>
          <dd className="mt-1 text-sm text-gray-900">
            {selectedMember?.notes}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default TeamMemberDetail;
