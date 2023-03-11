"use client";
import { orderBy } from "lodash";

import { Button, Loading } from "@/components/atoms";
import {
  AddNewGoalModal,
  DeleteGoalConfirmModal,
  GoalCard,
} from "./components";

import useManageGoal from "./hooks/useManageGoal";

const GoalList: React.FC = () => {
  const {
    goalList,
    isLoading,
    isError,
    isDeleting,
    isAdding,
    showAddingModal,
    showDeleteModal: selectedGoalIdToDelete,
    onUpdateGoalField,
    onStartAdding,
    onStartDelete: setSelectedGoalIdToDelete,
    onConfirmDelete,
    onCancelDelete,
    onConfirmAddNew,
    onCancelAddNew,
  } = useManageGoal();

  if (isLoading)
    return (
      <div className="mt-20">
        <Loading />
      </div>
    );
  if (isError) return <div>Something went wrong. please try again</div>;

  return (
    <>
      {!goalList || goalList.length == 0 ? (
        <div className="mt-16 w-full text-center">
          <h1 className="text-lg text-gray-900">
            There is no goals. please add new goal.
          </h1>
          <Button className="mt-4" onClick={() => onStartAdding()}>
            Add New Goal
          </Button>
        </div>
      ) : (
        <div className="pl-16 pr-8 mt-8">
          <div className="flex justify-between w-full">
            <h1 className="text-3xl font-semibold">Team Goals</h1>
            <Button className="" onClick={() => onStartAdding()}>
              Add New Goal
            </Button>
          </div>

          <div className="-ml-12 mt-6">
            {orderBy(goalList, "title").map((goal, index) => (
              <GoalCard
                key={goal.title}
                id={goal.id}
                title={goal.title}
                progress={goal.progress}
                subGoals={goal.subGoals}
                assignTo={goal.assignTo}
                containerClassNames={index > 0 ? "mt-4" : ""}
                updateGoalTitle={onUpdateGoalField("title")}
                updateGoalProgress={onUpdateGoalField("progress")}
                updateGoalAssignTo={onUpdateGoalField("assignTo")}
                onDelete={setSelectedGoalIdToDelete}
                onAdd={onStartAdding}
              />
            ))}
          </div>
        </div>
      )}

      <DeleteGoalConfirmModal
        open={!!selectedGoalIdToDelete}
        isDeleting={isDeleting}
        onConfirm={onConfirmDelete}
        onClose={onCancelDelete}
      />
      <AddNewGoalModal
        key={showAddingModal.toString()}
        open={showAddingModal}
        isAdding={isAdding}
        onConfirm={onConfirmAddNew}
        onClose={onCancelAddNew}
      />
    </>
  );
};

export default GoalList;
