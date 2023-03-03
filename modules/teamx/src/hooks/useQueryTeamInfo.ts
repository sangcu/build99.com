import { useQuery } from "react-query";
import db from "@/database/db";

export const QUERY_TEAM_INFO = "QUERY_TEAM_INFO";

const queryTeamDetail = async () => {
  const teams = await db.teams.toArray();
  return teams?.[0];
};

const useQueryTeamInfo = () => {
  return useQuery([QUERY_TEAM_INFO], queryTeamDetail);
};

export default useQueryTeamInfo;
