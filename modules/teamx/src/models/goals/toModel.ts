import { Goal, GoalDto } from "./types";

const toModel: (goal: GoalDto) => Goal = (goal) => ({
  ...goal,
  assignTo: goal?.assign_to
    ?.split(",")
    .filter((member: string) => !!member)
    .map((memberId: string) => Number(memberId)),
});

export default toModel;
