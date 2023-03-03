import { useQuery } from "react-query";
import db from "@/database/db";

export const QUERY_TEAM_MEMBER_LIST = "QUERY_TEAM_MEMBER_LIST";

const queryTeamMemberList = async () => {
  return db.members.toArray();
};

const useQueryTeamMembers = () => {
  return useQuery([QUERY_TEAM_MEMBER_LIST], queryTeamMemberList);
};

export default useQueryTeamMembers;
