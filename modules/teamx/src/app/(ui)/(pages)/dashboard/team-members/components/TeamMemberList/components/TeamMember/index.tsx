import { TeamMember } from "@/app/(ui)/models/team-members/types";
import classNames from "classnames";
import Image from "next/image";

export interface TeamMemberProps extends TeamMember {
  isSelected: boolean;
}

const TeamMemberComp: React.FC<TeamMemberProps> = ({
  isSelected,
  name,
  jobTitle,
  profilePhoto,
}) => {
  return (
    <div
      className={classNames(
        "border border-4 px-2 py-4",
        isSelected ? "border-sky-500" : "border-transparent"
      )}
    >
      {profilePhoto ? (
        <Image
          width={240}
          height={240}
          className="mx-auto h-24 w-24 rounded-full"
          src={profilePhoto}
          alt=""
        />
      ) : (
        <div className="flex items-center w-full justify-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        </div>
      )}

      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{jobTitle}</p>
    </div>
  );
};

export default TeamMemberComp;
