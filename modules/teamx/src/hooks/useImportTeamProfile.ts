import db, { Member } from "@/database/db";
import { useMutation } from "react-query";

const importTeamProfile = async (params: {
  jsonString: string;
  override?: boolean;
}) => {
  const { jsonString, override } = params;

  if (!jsonString) throw new Error("The file is invalid");

  const contentSplited = jsonString.split(",");

  if (contentSplited.length != 2) {
    throw new Error("The file is invalid");
  }

  const value = contentSplited[1];

  try {
    const data = JSON.parse(window.atob(value));
    const { teamName, teamNote, members = [] } = data || {};

    if (override) {
      await db.members.clear();
      await db.teams.clear();
    }

    if (override) {
      await db.teams.add({
        name: teamName || "Click to update your team name",
        note: teamNote || "Click to update your team note",
      });
    } else {
      const currentTeam = (await db.teams.toArray())?.[0];
      if (currentTeam) {
        await db.teams?.update(currentTeam?.id as number, {
          name: teamName || currentTeam?.name,
          note: teamNote || currentTeam?.note,
        });
      }
    }

    if (members)
      await db.members.bulkAdd(
        (members as Member[]).map(({ id, ...member }) => member)
      );
  } catch (e) {
    console.log("eeeee", e);
    throw new Error("Cannot read data from your file");
  }
};

const useImportTeamProfile = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(importTeamProfile, {
    onSuccess,
    onError,
  });
};

export default useImportTeamProfile;
