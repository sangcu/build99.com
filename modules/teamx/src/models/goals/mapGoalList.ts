import toModel from "./toModel";
import { Goal, GoalConnectionDto, GoalDto } from "./types";

const mapGoalList: (goalData?: {
  goalList: GoalDto[];
  goalConnections: GoalConnectionDto[];
}) => Goal[] | undefined = (goalData) => {
  if (!goalData) return undefined;

  const { goalList, goalConnections } = goalData;

  const getConnections = (id: number) => {
    const connectionIds = goalConnections
      .filter((connection) => connection.parent_id === id)
      .map((connection) => connection.child_id);

    const chidren: Goal[] = goalList
      .filter((goal: GoalDto) => goal.id && connectionIds.includes(goal.id))
      .map((goal: GoalDto) => ({
        ...toModel(goal),
        subGoals: getConnections(goal.id as number),
      }));

    return chidren;
  };

  return goalList
    .filter(
      (goal: GoalDto) =>
        !goalConnections
          .map((connection) => connection.child_id)
          .includes(goal.id as number)
    )
    .map((goal: GoalDto) => {
      return {
        ...toModel(goal),
        subGoals: getConnections(goal.id as number),
      };
    });
};

export default mapGoalList;
