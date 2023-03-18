import ListView from "./components/ListView";
import DropDownView from "./components/DropDownView";
import useQueryTeamMemberList from "@/app/(ui)/(pages)/dashboard/team-members/hooks/useQueryTeamMemberList";

export interface TeamMemberSelectProps {
  label?: string;
  selectedTeamMemberIds?: number[];
  type?: "dropdown" | "list";
  onChanged?: (value: number[]) => void;
}

const TeamMemberSelect: React.FC<TeamMemberSelectProps> = ({
  label,
  selectedTeamMemberIds,
  type = "dropdown",
  onChanged,
}) => {
  const { data } = useQueryTeamMemberList();

  const onSelect = (memberId: number) => () => {
    const value =
      selectedTeamMemberIds &&
      selectedTeamMemberIds.includes(memberId as number)
        ? selectedTeamMemberIds.filter((id) => id !== memberId)
        : [...(selectedTeamMemberIds || []), memberId];

    onChanged && onChanged(value);
  };

  const viewTypes = {
    list: (
      <ListView
        label={label}
        memberList={
          data?.map((member) => ({
            id: member.id as number,
            name: member.name,
            jobTitle: member.job_title,
            profilePhoto: member.profile_photo,
          })) || []
        }
        selectedTeamMemberIds={selectedTeamMemberIds as number[]}
        onSelect={onSelect}
      />
    ),
    dropdown: (
      <DropDownView
        memberList={
          data?.map((member) => ({
            id: member.id as number,
            name: member.name,
            jobTitle: member.job_title,
            profilePhoto: member.profile_photo,
          })) || []
        }
        selectedTeamMemberIds={selectedTeamMemberIds as number[]}
        onSelect={onSelect}
      />
    ),
  };

  return viewTypes[type];
};

export default TeamMemberSelect;
