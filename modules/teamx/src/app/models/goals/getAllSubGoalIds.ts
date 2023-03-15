import { GoalConnectionDto } from "./types";

const getAllSubGoalIds: (
  goalId: number,
  goalConnections: GoalConnectionDto[]
) => number[] = (goalId, goalConnections) => {
  const subGoalIds = goalConnections
    .filter((connection) => connection.parent_id === goalId)
    .map((connection) => connection.child_id);

  if (!subGoalIds || subGoalIds.length === 0) return [goalId];

  return subGoalIds.reduce(
    (result, item) => {
      return [...result, ...getAllSubGoalIds(item, goalConnections)];
    },
    [goalId]
  );
};

export default getAllSubGoalIds;
