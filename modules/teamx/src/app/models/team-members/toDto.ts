import { TeamMember, TeamMemberDto } from "./types";

const toDto: (teamMember: TeamMember) => TeamMemberDto = (
  teamMember
) => ({
  ...teamMember,
  job_title: teamMember.jobTitle,
  profile_photo: teamMember.profilePhoto,
});

export default toDto;
