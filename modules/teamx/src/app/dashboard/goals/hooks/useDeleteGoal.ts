import db from "@/database/db";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_GOAL_LIST } from "./useQueryGoalList";
import { GoalConnectionDto, GoalDto } from "@/models/goals/types";

const deleteGoal: (params: { id: number }) => Promise<[number, void]> = async (
  params
) => {
  const { id } = params;

  return Promise.all([
    db.goal_connections
      .filter(
        (connection) =>
          connection.child_id === id || connection.parent_id === id
      )
      .delete(),
    db.goals.delete(id),
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

      queryClient.setQueryData([QUERY_GOAL_LIST], {
        goalList: goalList.filter((goal) => goal.id !== variables.id),
        goalConnections: goalConnections.filter(
          (connection) =>
            connection.parent_id !== variables.id &&
            connection.child_id !== variables.id
        ),
      });
      onSuccess && onSuccess(data, variables, context);
    },
    onError,
  });
};

export default useDeleteGoal;
