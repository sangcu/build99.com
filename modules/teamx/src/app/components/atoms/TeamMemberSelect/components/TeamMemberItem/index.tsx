import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface TeamMemberItemProps {
  name: string;
  jobTitle: string;
  profilePhoto: string;
  isChecked?: boolean;
  onSelect: () => void;
}

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({
  name,
  jobTitle,
  profilePhoto,
  isChecked,
  onSelect,
}) => {
  return (
    <div
      key={name}
      className="flex justify-between items-center cursor-pointer px-4"
      onClick={onSelect}
    >
      <div className="flex py-4 flex-1 justify-start items-start">
        {profilePhoto ? (
          <Image
            width={20}
            height={20}
            className="h-10 w-10 rounded-full"
            src={profilePhoto}
            alt=""
          />
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        )}

        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{jobTitle}</p>
        </div>
      </div>
      {isChecked && (
        <CheckIcon className="h-5 w-5 text-orange-600" aria-hidden="true" />
      )}
    </div>
  );
};

export default TeamMemberItem;
