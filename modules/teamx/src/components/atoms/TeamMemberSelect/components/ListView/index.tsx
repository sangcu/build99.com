import TeamMemberItem from "../TeamMemberItem";

interface ListViewProps {
  label?: string;
  memberList: {
    id: number;
    name: string;
    jobTitle: string;
    profilePhoto: string;
  }[];
  selectedTeamMemberIds: number[];
  onSelect: (memberId: number) => () => void;
}

const ListView: React.FC<ListViewProps> = ({
  label,
  memberList,
  selectedTeamMemberIds,
  onSelect,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <ul
        role="list"
        className="w-full divide-y divide-gray-200 max-h-60 overflow-y-auto"
      >
        {memberList?.map((member) => (
          <TeamMemberItem
            key={member.id}
            name={member.name}
            jobTitle={member.jobTitle}
            profilePhoto={member.profilePhoto}
            isChecked={selectedTeamMemberIds?.includes(member?.id as number)}
            onSelect={onSelect(member.id as number)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListView;
