import db from "@/database/db";
import { Goal, GoalConnectionDto, GoalDto } from "@/models/goals/types";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_GOAL_LIST } from "./useQueryGoalList";

const addNewGoal: (params: {
  newGoal: GoalDto;
  parentId?: number;
}) => Promise<Goal> = async (params) => {
  const { newGoal, parentId } = params;

  const newId = await db.goals.add(newGoal);

  console.log('parentId', parentId)
  console.log('newId', newId)

  if (parentId) {
    await db.goal_connections.add({
      parent_id: parentId,
      child_id: Number(newId),
    });
  }

  const response: Goal = {
    ...newGoal,
    id: Number(newId),
  };

  return response;
};

const useAddNewGoal = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  const queryClient = useQueryClient();
  const goalData = (queryClient.getQueryData([QUERY_GOAL_LIST]) as {
    goalList: GoalDto[];
    goalConnections: GoalConnectionDto[];
  }) || {
    goalList: [],
    goalConnections: [],
  };

  return useMutation(addNewGoal, {
    onSuccess: (data, variables, context) => {
      const { goalList, goalConnections } = goalData;

      queryClient.setQueryData([QUERY_GOAL_LIST], {
        goalList: [data, ...goalList],
        goalConnections: [
          ...goalConnections,
          variables.parentId
            ? {
                parent_id: variables.parentId,
                child_id: data.id,
              }
            : undefined,
        ].filter((connection) => !!connection),
      });
      onSuccess && onSuccess(data, variables, context);
    },

    onError,
  });
};

export default useAddNewGoal;
