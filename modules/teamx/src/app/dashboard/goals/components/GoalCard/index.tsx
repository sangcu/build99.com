import { InlineEditableInput, TeamMemberSelect } from "@/components/atoms";
import { getGoalStatus } from "@/models/goals";
import { Goal, STATUS } from "@/models/goals/types";
import { Disclosure } from "@headlessui/react";
import {
  ChevronRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import { orderBy } from "lodash";

interface GoalCardrops extends Goal {
  containerClassNames?: string;
  headerClassNames?: string;
  updateGoalTitle: (goalId: number, value: string) => void;
  updateGoalProgress: (goalId: number, progress: number) => void;
  updateGoalAssignTo: (goalId: number, assignTo: number[]) => void;
  onDelete: (goalId: number) => void;
  onAdd: (goalId: number) => void;
}

const GoalCard: React.FC<GoalCardrops> = ({
  id,
  subGoals,
  title,
  progress,
  assignTo,
  updateGoalTitle,
  updateGoalProgress,
  updateGoalAssignTo,
  onDelete,
  onAdd,
  containerClassNames,
  headerClassNames,
}) => {
  if (!id) return null;

  const goalStatus = getGoalStatus(progress);

  const statusColorClassName = {
    [STATUS.OK]: "!bg-green-500",
    [STATUS.WARNING]: "!bg-amber-500",
    [STATUS.BEHIND]: "!bg-red-500",
  }[goalStatus];

  return (
    <Disclosure as="div" className={classNames([containerClassNames, ""])}>
      {({ open }) => (
        <>
          <div
            className={classNames(
              "flex items-center",
              !open && headerClassNames
            )}
          >
            <Disclosure.Button
              className={classNames(
                "w-12 flex items-center justify-center",
                (!subGoals || subGoals.length === 0) && "hidden"
              )}
            >
              <ChevronRightIcon
                className={`${
                  open ? "rotate-90 transform" : ""
                } h-6 w-6 text-gray-500`}
              />
            </Disclosure.Button>
            <div
              className={classNames(
                "flex-1 bg-white shadow sm:rounded-lg flex h-14 items-center",
                (!subGoals || subGoals.length === 0) && "ml-12"
              )}
            >
              <InlineEditableInput
                value={title}
                onChanged={(value) => updateGoalTitle(id, value as string)}
                className="flex-1 mx-4"
              />
              <div className="mr-4">
                <TeamMemberSelect
                  selectedTeamMemberIds={assignTo || []}
                  onChanged={(value) => {
                    console.log("value", value);
                    updateGoalAssignTo(id, value);
                  }}
                />
              </div>
              <div
                className="px-3 py-1.5 rounded-md border-gray-300 border hover:bg-gray-100 cursor-pointer mr-3 flex items-center"
                onClick={() => onAdd(id)}
              >
                <PlusIcon className="h-5 w-5 text-gray-500" />
              </div>
              <div
                className="px-3 py-1.5 rounded-md border-gray-300 border hover:bg-gray-100 cursor-pointer mr-3 flex items-center"
                onClick={() => onDelete(id)}
              >
                <TrashIcon className="h-5 w-5 text-gray-500" />
              </div>
              <div
                className={classNames(
                  "h-full w-20 sm:rounded-r-lg text-white text-sm flex items-center justify-center font-semibold",
                  statusColorClassName
                )}
              >
                <InlineEditableInput
                  value={progress?.toString()}
                  onChanged={(value) => updateGoalProgress(id, Number(value))}
                  className={classNames(
                    "text-center !w-8 !h-8 mr-1 bg-green-500 !border-white flex items-center justify-center",
                    statusColorClassName
                  )}
                />
                <span className="">%</span>
              </div>
            </div>
          </div>
          {subGoals && subGoals.length > 0 && (
            <Disclosure.Panel className="border-l border-gray-200 text-gray-900 ml-6">
              {orderBy(subGoals, "title")?.map((child: any) => (
                <GoalCard
                  key={child.title}
                  {...child}
                  assignTo={child.assignTo}
                  updateGoalTitle={updateGoalTitle}
                  updateGoalProgress={updateGoalProgress}
                  updateGoalAssignTo={updateGoalAssignTo}
                  onDelete={onDelete}
                  onAdd={onAdd}
                  containerClassNames="mt-4"
                  headerClassNames="hover:border-l-2 hover:-ml-0.5 hover:border-orange-600"
                />
              ))}
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default GoalCard;
