import { useQuery } from "react-query";
import { useLiveQuery } from "dexie-react-hooks";
import db from "@/database/db";

export const QUERY_TEAM_MEMBER_LIST = "QUERY_TEAM_MEMBER_LIST";

const queryTeamMemberList = async () => {
  console.log("====> start");
  const result = await db.members.toArray();
  console.log("====> end");
  return result;
};

const useQueryTeamMembers = () => {
  return useQuery([QUERY_TEAM_MEMBER_LIST], queryTeamMemberList);
};

export default useQueryTeamMembers;
