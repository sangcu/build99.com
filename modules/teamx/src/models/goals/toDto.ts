import { Goal, GoalDto } from "./types";

const toDto: (goal: Goal) => GoalDto = (goal) => ({
  id: goal.id,
  title: goal.title,
  progress: goal.progress || 0,
  assign_to: goal.assignTo ? goal.assignTo.join(",") : "",
});

export default toDto;
