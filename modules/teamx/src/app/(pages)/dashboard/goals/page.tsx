"use client";
import { orderBy } from "lodash";

import { Button, Loading } from "@/app/components/atoms";
import {
  AddNewGoalModal,
  DeleteGoalConfirmModal,
  GoalCard,
  Header,
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
    selectedGoal,
    onUpdateGoalField,
    onStartAdding,
    onStartDelete: setSelectedGoalIdToDelete,
    onConfirmDelete,
    onCancelDelete,
    onConfirmAddNew,
    onCancelAddNew,
    onSelectGoal,
    onBack,
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
        <div className="mt-16 w-full flex flex-col items-center">
          <h1 className="text-lg text-gray-900">There is no goals!</h1>
          <Button
            className="hidden lg:block mt-4"
            onClick={() => onStartAdding()}
          >
            Add New Goal
          </Button>
        </div>
      ) : (
        <div className="pl-4 pr-4 lg:pl-16 lg:pr-8 mt-8">
          <Header
            selectedGoal={selectedGoal}
            onBack={onBack}
            onAddNew={onStartAdding}
          />
          <div className="lg:-ml-12 mt-6">
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
                onSelect={() => onSelectGoal(goal)}
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
