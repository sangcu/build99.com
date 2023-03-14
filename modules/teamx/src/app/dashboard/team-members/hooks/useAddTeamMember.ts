import db, { Member } from "@/database/db";
import { useMutation } from "react-query";

const onMutate = async (member: Member) => {
  const id = await db.members.add(member);
  return id;
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
