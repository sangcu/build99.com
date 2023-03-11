import db from "@/database/db";
import { GoalConnectionDto, GoalDto } from "@/models/goals/types";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_GOAL_LIST } from "./useQueryGoalList";
import { toModel } from "@/models/goals";

const updateGoal: (updateGoal: GoalDto) => Promise<number> = async (
  updateGoal
) => {
  const { id, ...fields } = updateGoal;

  return db.goals.update(id as number, {
    ...fields,
  });
};

const useUpdateGoal = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation(updateGoal, {
    onMutate: async (params) => {
      const { goalList, goalConnections } = queryClient.getQueryData([
        QUERY_GOAL_LIST,
      ]) as {
        goalList: GoalDto[];
        goalConnections: GoalConnectionDto[];
      };

      queryClient.setQueryData([QUERY_GOAL_LIST], {
        goalList: goalList.map((goal) =>
          goal.id === params.id ? toModel(params) : goal
        ),
        goalConnections,
      });

      return {
        previousData: {
          goalList,
          goalConnections,
        },
      };
    },
    onSuccess,
    onError: (err, data, context) => {
      context &&
        queryClient.setQueryData([QUERY_GOAL_LIST], context.previousData);
      onError && onError(err, data, context);
    },
  });
};

export default useUpdateGoal;
