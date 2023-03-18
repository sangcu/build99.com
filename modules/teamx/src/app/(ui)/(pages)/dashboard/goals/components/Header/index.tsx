import { Button } from "@/app/(ui)/components/atoms";
import { Goal } from "@/app/(ui)/models/goals/types";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  selectedGoal?: Goal;
  onBack: () => void;
  onAddNew: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedGoal, onBack, onAddNew }) => {
  return (
    <div className="flex justify-between w-full">
      {!!selectedGoal ? (
        <div className="flex lg:hidden space-x-4 items-center" onClick={onBack}>
          <div className="p-2 bg-white rounded-md shadow-sm">
            <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="text-2xl font-semibold">{selectedGoal.title}</div>
        </div>
      ) : (
        <h1 className="text-3xl font-semibold">Team Goals</h1>
      )}
      <Button className="hidden lg:block" onClick={() => onAddNew()}>
        Add New Goal
      </Button>
    </div>
  );
};

export default Header;
