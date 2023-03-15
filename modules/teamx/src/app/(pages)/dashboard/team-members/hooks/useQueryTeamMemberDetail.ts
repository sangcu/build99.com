import { useQuery } from "react-query";
import db from "@/database/db";
import axios from "axios";

export const QUERY_TEAM_MEMBER_DETAIL = "QUERY_TEAM_MEMBER_DETAIL";

const queryTeamMemberDetail = async ({ queryKey }: { queryKey: any[] }) => {
  const [_key, { teamId, memberId }] = queryKey;

  const result = await axios.get(`/api/teams/${teamId}/members/${memberId}`);
  return result.data;
};

const useQueryTeamMemberDetail = (teamId?: string, memberId?: string) => {
  return useQuery(
    [QUERY_TEAM_MEMBER_DETAIL, { teamId, memberId }],
    queryTeamMemberDetail,
    {
      enabled: !!teamId && !!memberId,
    }
  );
};

export default useQueryTeamMemberDetail;
