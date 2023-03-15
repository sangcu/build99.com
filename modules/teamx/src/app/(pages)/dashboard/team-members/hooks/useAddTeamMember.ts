import { TeamMemberDto } from "@/app/models/team-members/types";
import db, { Member } from "@/database/db";
import axios from "axios";
import { useMutation } from "react-query";

const onMutate = async (params: { teamId?: string; member: TeamMemberDto }) => {
  const { teamId, member } = params;
  return axios.post(`/api/teams/${teamId}/members`, {
    ...member,
  });
};

const useAddTeamMember = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(onMutate, {
    onSuccess,
    onError,
  });
};

export default useAddTeamMember;
