import db from "@/database/db";
import { useMutation } from "react-query";

const exportTeamProfile = async () => {
  const members = await db.members.toArray();
  const team = (await db.teams.toArray())?.[0];

  const exportModel = {
    teamName: team?.name,
    teamNote: team?.note,
    members,
  };

  const blob = new Blob([JSON.stringify(exportModel)], {
    type: "application/json",
  });

  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "yleader.json";
  a.click();
};

const useExportTeamProfile = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(exportTeamProfile, {
    onSuccess,
    onError,
  });
};

export default useExportTeamProfile;
