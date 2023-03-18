import { useQuery } from "react-query";
import db from "@/database/db";
import axios from "axios";
import { TeamMemberDto } from "@/app/(ui)/models/team-members/types";

export const QUERY_TEAM_MEMBER_LIST = "QUERY_TEAM_MEMBER_LIST";

const queryTeamMemberList = async ({ queryKey }: { queryKey: any[] }) => {
  const [_key, { teamId }] = queryKey;
  const response = await axios.get<TeamMemberDto[]>(
    `/api/teams/${teamId}/members`
  );
  return response.data;
};

const useQueryTeamMemberList = (teamId?: string) => {
  return useQuery([QUERY_TEAM_MEMBER_LIST, { teamId }], queryTeamMemberList, {
    enabled: !!teamId,
  });
};

export default useQueryTeamMemberList;
