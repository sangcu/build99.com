import { TeamMember, TeamMemberDto } from "./types";

const toModel: (teamMemberDto: TeamMemberDto) => TeamMember = (
  teamMemberDto
) => ({
  ...teamMemberDto,
  jobTitle: teamMemberDto.job_title,
  profilePhoto: teamMemberDto.profile_photo,
});

export default toModel;
