"use client";

import { useParams } from "next/navigation";
import { team_member_goal_groups } from "../../../../exampleData";

const GoalInfo: React.FC = () => {
  const { goalId } = useParams() || {};
  const goalDetail = team_member_goal_groups
    .flatMap((group) => group.goals)
    .find((g) => g.id === Number(goalId));
  const { startDate, endDate, updatePeriod, metric, target } = goalDetail || {};

  return (
    <dl className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Duration</dt>
        <dd className="mt-1 text-sm text-gray-900">{`${startDate} ~ ${endDate}`}</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Update period</dt>
        <dd className="mt-1 text-sm text-gray-900">{updatePeriod}</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Metric</dt>
        <dd className="mt-1 text-sm text-gray-900">{metric}</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Target</dt>
        <dd className="mt-1 text-sm text-gray-900">{target}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-sm font-medium text-gray-500">Assessments</dt>
        <dd className="mt-1 text-sm text-gray-900">
          <ul role="list" className="grid grid-cols-3">
            {[
              {
                name: "Calvin Hawkins",
                image:
                  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
              {
                name: "Kristen Ramos",
                image:
                  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
              {
                name: "Ted Fox",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
            ].map((person) => (
              <li key={person.name} className="flex py-4 items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.image}
                  alt=""
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
};

export default GoalInfo;
