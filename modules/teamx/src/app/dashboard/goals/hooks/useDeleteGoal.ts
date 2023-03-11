import db from "@/database/db";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_GOAL_LIST } from "./useQueryGoalList";
import { GoalConnectionDto, GoalDto } from "@/models/goals/types";
import { getAllSubGoalIds } from "@/models/goals";

const deleteGoal: (params: { id: number }) => Promise<[number, void]> = async (
  params
) => {
  const { id } = params;

  const allConnections = await db.goal_connections.toArray();
  const ids = [id, ...getAllSubGoalIds(id, allConnections)];

  return Promise.all([
    db.goal_connections
      .filter(
        (connection) =>
          ids.includes(connection.child_id) ||
          ids.includes(connection.parent_id)
      )
      .delete(),
    db.goals.bulkDelete(ids),
  ]);
};

const useDeleteGoal = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation(deleteGoal, {
    onSuccess: (data, variables, context) => {
      const { goalList, goalConnections } = queryClient.getQueryData([
        QUERY_GOAL_LIST,
      ]) as {
        goalList: GoalDto[];
        goalConnections: GoalConnectionDto[];
      };

      const ids = [
        variables.id,
        ...getAllSubGoalIds(variables.id, goalConnections),
      ];

      queryClient.setQueryData([QUERY_GOAL_LIST], {
        goalList: goalList.filter((goal) => !ids.includes(goal.id as number)),
        goalConnections: goalConnections.filter(
          (connection) =>
            !ids.includes(connection.parent_id) &&
            !ids.includes(connection.child_id)
        ),
      });
      onSuccess && onSuccess(data, variables, context);
    },
    onError,
  });
};

export default useDeleteGoal;
