import toModel from "./toModel";
import { TeamMember, TeamMemberDto } from "./types";

const toModelList: (teamMemberList: TeamMemberDto[]) => TeamMember[] = (
  teamMemberList
) => teamMemberList.map((item) => toModel(item));

export default toModelList;
