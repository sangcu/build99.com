import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import TeamMemberItem from "../TeamMemberItem";
import ImageButton from "./components/ImageButton";

interface DropDownViewProps {
  memberList: {
    id: number;
    name: string;
    jobTitle: string;
    profilePhoto: string;
  }[];
  selectedTeamMemberIds: number[];
  onSelect: (memberId: number) => () => void;
}

const DropDownView: React.FC<DropDownViewProps> = ({
  memberList,
  selectedTeamMemberIds,
  onSelect,
}) => {
  const hasMember = selectedTeamMemberIds && selectedTeamMemberIds?.length > 0;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {hasMember ? (
          <ImageButton
            photoList={
              memberList
                ?.filter((member) =>
                  selectedTeamMemberIds.includes(member.id as number)
                )
                .map((member) => ({
                  key: member.id.toString(),
                  photo: member.profilePhoto,
                })) || []
            }
          />
        ) : (
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Assignees
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 divide-y px-4">
            {memberList?.map((member) => (
              <Menu.Item key={member.id}>
                <TeamMemberItem
                  name={member.name}
                  jobTitle={member.jobTitle}
                  profilePhoto={member.profilePhoto}
                  isChecked={selectedTeamMemberIds?.includes(
                    member?.id as number
                  )}
                  onSelect={onSelect(member.id as number)}
                />
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownView;
