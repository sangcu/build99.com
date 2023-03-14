import { useQuery } from "react-query";
import db from "@/database/db";

export const QUERY_TEAM_MEMBER_DETAIL = "QUERY_TEAM_MEMBER_DETAIL";

const queryTeamMemberDetail = async ({ queryKey }: { queryKey: any[] }) => {
  const [_key, { memberId }] = queryKey;
  return (await db.members.where("id").equals(Number(memberId)).toArray())?.[0];
};

const useQueryTeamMemberDetail = (memberId: string) => {
  return useQuery(
    [QUERY_TEAM_MEMBER_DETAIL, { memberId }],
    queryTeamMemberDetail
  );
};

export default useQueryTeamMemberDetail;
