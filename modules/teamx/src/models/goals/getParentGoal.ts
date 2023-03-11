import toModel from "./toModel";
import { GoalConnectionDto, GoalDto } from "./types";

const getParentGoal = (
  goalData?: {
    goalList: GoalDto[];
    goalConnections: GoalConnectionDto[];
  },
  goalId?: number
) => {
  if (!goalData) return;

  const { goalList, goalConnections } = goalData;

  const selectedConection = goalConnections.find(
    (connection) => connection.child_id === goalId
  );

  console.log("selectedConection", selectedConection);
  const parentGoal = goalList.find(
    (goal) => goal.id === selectedConection?.parent_id
  );

  if (!parentGoal) return undefined;

  return toModel(parentGoal);
};

export default getParentGoal;
