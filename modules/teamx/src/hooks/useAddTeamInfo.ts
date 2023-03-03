import db, { Team } from "@/database/db";
import { useMutation } from "react-query";

const addTeamInfo = async (teamInfo: Team) => {
  const id = await db.teams.add(teamInfo);
  return id;
};

const useAddTeamInfo = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(addTeamInfo, {
    onSuccess,
    onError,
  });
};

export default useAddTeamInfo;
