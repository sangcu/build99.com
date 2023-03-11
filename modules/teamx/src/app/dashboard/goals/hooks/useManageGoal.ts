import { useState } from "react";

import useQueryGoalList from "./useQueryGoalList";
import useAddNewGoal from "./useAddNewGoal";
import useDeleteGoal from "./useDeleteGoal";
import useUpdateGoal from "./useUpdateGoal";

import { getParentGoal, mapGoalList, toDto, toModel } from "@/models/goals";
import { Goal } from "@/models/goals/types";

const useManageGoal = () => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | undefined>(undefined);
  const [selectedGoalIdToDelete, setSelectedGoalIdToDelete] = useState<
    number | undefined
  >();

  const [selectedGoalIdToAdd, setSelectedGoalIdToAdd] = useState<
    number | undefined
  >();

  const [showAddingModal, setShowAddingModal] = useState(false);

  const onSelectParent = () => {
    if (!selectedGoal || !goalData) return;

    const parentGoal = getParentGoal(goalData, selectedGoal.id);
    setSelectedGoal(parentGoal);
  };

  const onStartAdding = (goalId?: number) => {
    setShowAddingModal(true);
    setSelectedGoalIdToAdd(goalId);
  };

  const { data: goalData, isLoading, isError } = useQueryGoalList();
  const { mutate: onAddNew, isLoading: isAdding } = useAddNewGoal(() => {
    setSelectedGoalIdToAdd(undefined);
    setShowAddingModal(false);
  });
  const { mutate: onDelete, isLoading: isDeleting } = useDeleteGoal(() =>
    setSelectedGoalIdToDelete(undefined)
  );
  const { mutate: onUpdate } = useUpdateGoal();

  const onUpdateGoalField =
    (fieldName: string) => (goalId: number, value: any) => {
      const selectedGoal = goalData?.goalList.find(
        (goal) => goal.id === goalId
      );

      if (!selectedGoal) return;

      onUpdate(
        toDto({
          ...toModel(selectedGoal),
          [fieldName]: value,
        })
      );
    };

  const onConfirmDelete = () => {
    if (selectedGoalIdToDelete) {
      onDelete({
        id: selectedGoalIdToDelete,
      });
    }
  };

  const onCancelDelete = () => setSelectedGoalIdToDelete(undefined);

  const onConfirmAddNew = (newGoal: Goal) => {
    onAddNew({ newGoal: toDto(newGoal), parentId: selectedGoalIdToAdd });
  };

  const onCancelAddNew = () => {
    setShowAddingModal(false);
    setSelectedGoalIdToAdd(undefined);
  };

  const goalList = mapGoalList(goalData, selectedGoal?.id);

  return {
    goalList,
    isLoading,
    isError,
    isDeleting,
    isAdding,
    selectedGoal,
    showAddingModal,
    showDeleteModal: selectedGoalIdToDelete,
    onUpdateGoalField,
    onStartAdding,
    onStartDelete: setSelectedGoalIdToDelete,
    onConfirmDelete,
    onCancelDelete,
    onConfirmAddNew,
    onCancelAddNew,
    onSelectGoal: setSelectedGoal,
    onBack: onSelectParent,
  };
};

export default useManageGoal;
