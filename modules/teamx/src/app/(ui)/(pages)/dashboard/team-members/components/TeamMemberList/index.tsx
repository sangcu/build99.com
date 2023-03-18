import TeamMember, { TeamMemberProps } from "./components/TeamMember";
import { Button } from "@/app/(ui)/components/atoms";
import Link from "next/link";

const TeamMemberList: React.FC<{
  memberList: TeamMemberProps[];
}> = ({ memberList }) => {
  if (!memberList) return null;
  if (memberList.length === 0)
    return (
      <div className="mt-12 text-center">
        <div className="text-gray-600 text-lg">
          There is no team members. Create the first one
        </div>
        <Link href="/dashboard/team-members/add-new">
          <Button className="!w-36 mt-2">Create</Button>
        </Link>
      </div>
    );

  return (
    <ul
      role="list"
      className="mt-8 grid max-w-2xl grid-cols-2 gap-y-8 gap-x-8 text-center sm:grid-cols-3 lg:mx-0 lg:max-w-none"
    >
      {memberList?.map((member) => (
        <li key={member?.id} className="!cursor-pointer">
          <Link href={`/dashboard/team-members/${member.id}/profile`}>
            <TeamMember {...member} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TeamMemberList;
