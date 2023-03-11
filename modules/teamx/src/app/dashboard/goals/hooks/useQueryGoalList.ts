import { useQuery } from "react-query";
import db from "@/database/db";
import { GoalConnectionDto, GoalDto } from "@/models/goals/types";

export const QUERY_GOAL_LIST = "QUERY_GOAL_LIST";

const queryGoalList = async () => {
  const [goalList, goalConnections] = await Promise.all([
    await db.goals.toArray(),
    await db.goal_connections.toArray(),
  ]);

  const response: {
    goalList: GoalDto[];
    goalConnections: GoalConnectionDto[];
  } = {
    goalList,
    goalConnections,
  };

  return response;
};

const useQueryGoalList = () => {
  return useQuery([QUERY_GOAL_LIST], queryGoalList);
};

export default useQueryGoalList;
