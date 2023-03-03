import { InlineEditableInput } from "@/components/atoms";
import useQueryTeamInfo from "@/hooks/useQueryTeamInfo";
import useUpdateTeamInfo from "@/hooks/useUpdateTeamInfo";
import { debounce } from "lodash";
import { ChangeEvent, useMemo } from "react";

const TeamHeader: React.FC = () => {
  const { data: teamInfo } = useQueryTeamInfo();
  const { mutate: updateTeamInfo } = useUpdateTeamInfo();
  const { name: teamName, note: teamNote } = teamInfo || {};

  const onChanged =
    (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      teamInfo &&
        updateTeamInfo({
          ...teamInfo,
          [field]: event.target.value as string,
        });
    };

  const debouncedChangeTeamNameHandler = useMemo(
    () => debounce(onChanged("name"), 300),
    [teamInfo]
  );

  const debouncedChangeTeamNoteHandler = useMemo(
    () => debounce(onChanged("note"), 300),
    [teamInfo]
  );


  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <InlineEditableInput
        value={teamName}
        onChanged={debouncedChangeTeamNameHandler}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      />
      <InlineEditableInput
        value={teamNote}
        onChanged={debouncedChangeTeamNoteHandler}
        className="mt-2 text-lg leading-8 text-gray-600"
      />
    </div>
  );
};

export default TeamHeader;
