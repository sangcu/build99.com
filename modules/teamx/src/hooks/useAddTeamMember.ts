import db, { Member } from "@/database/db";

const useAddTeamMember = () => ({
  onMutate: async (member: Member) => {
    const id = await db.members.add(member);
    return id;
  },
});

export default useAddTeamMember;
