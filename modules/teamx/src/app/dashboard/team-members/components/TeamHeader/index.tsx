import { InlineEditableInput } from "@/components/atoms";
import useQueryTeamInfo from "@/app/dashboard/team-members/hooks/useQueryTeamInfo";
import useUpdateTeamInfo from "../../hooks/useUpdateTeamInfo";

const TeamHeader: React.FC = () => {
  const { data: teamInfo } = useQueryTeamInfo();
  const { mutate: updateTeamInfo } = useUpdateTeamInfo();
  const { name: teamName, note: teamNote } = teamInfo || {};

  const onChanged =
    (field: string) => (value?: string) => {
      teamInfo &&
        updateTeamInfo({
          ...teamInfo,
          [field]: value,
        });
    };

  return (
    <div className="">
      <InlineEditableInput
        value={teamName}
        onChanged={onChanged("name")}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      />
      <InlineEditableInput
        value={teamNote}
        onChanged={onChanged("note")}
        className="mt-2 text-lg leading-8 text-gray-600"
      />
    </div>
  );
};

export default TeamHeader;
