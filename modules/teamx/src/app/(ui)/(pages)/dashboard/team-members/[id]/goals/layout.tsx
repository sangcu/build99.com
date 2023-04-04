"use client";

import { useParams, usePathname } from "next/navigation";
import { team_member_goals } from "../../exampleData";
import classNames from "classnames";
import Link from "next/link";
import { Route } from "next";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, goalId } = useParams() || {};
  const pathName = usePathname();

  const tabs = [
    {
      value: "info",
      label: "Info",
      href: `/dashboard/team-members/${id}/goals/${goalId}/info` as Route<string>,
      active: pathName === `/dashboard/team-members/${id}/goals/${goalId}/info`,
    },
    {
      value: "progress",
      label: "Progress",
      href: `/dashboard/team-members/${id}/goals/${goalId}/progress` as Route<string>,
      active:
        pathName === `/dashboard/team-members/${id}/goals/${goalId}/progress`,
    },
    {
      value: "histories",
      label: "Histories",
      href: `/dashboard/team-members/${id}/goals/${goalId}/histories` as Route<string>,
      active:
        pathName === `/dashboard/team-members/${id}/goals/${goalId}/histories`,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pb-8">
        <div className="overflow-y-auto w-[420px] border-r member-detail-content-area">
          <ul role="list" className="divide-y divide-gray-200">
            <li>
              <div className="text-lg text-gray-900 px-4 py-4 font-semibold">
                Goal List
              </div>
            </li>
            {team_member_goals.map((goal) => (
              <li
                key={goal.title}
                // onClick={() => {
                //   if (!!selectedGoal) {
                //     setSelectedGoalId(undefined);
                //     setSelectedTab(undefined);
                //     return;
                //   }
                //   setSelectedGoalId(goal.id);
                //   setSelectedTab("info");
                // }}
              >
                <Link
                  href={`/dashboard/team-members/${id}/goals/${goal.id}/info`}
                >
                  <div
                    className={classNames(
                      "cursor-pointer text-sm text-gray-900 px-4 py-3",
                      Number(goalId) === goal.id
                        ? "bg-sky-100"
                        : "hover:bg-sky-200 hover:bg-opacity-20"
                    )}
                  >
                    {goal.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-6 flex-1 pl-4 pt-4 overflow-y-auto member-detail-content-area">
          {!!goalId && (
            <div className="flex justify-start">
              <span className="w-1/2 isolate inline-flex rounded-md shadow-sm">
                {tabs.map((tab, index) => (
                  <Link
                    key={tab.value}
                    className={classNames(
                      "flex-1 justify-center relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10",
                      tab.active ? "bg-sky-100" : "bg-white hover:bg-gray-50",
                      index === 0 ? "rounded-l-md" : "-ml-px",
                      index === tabs.length - 1 && "rounded-r-md"
                    )}
                    href={tab.href}
                  >
                    {/* <button
                      key={tab.value}
                      type="button"
                      className={classNames(
                        "flex-1 justify-center relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10",
                        tab.active ? "bg-sky-100" : "bg-white hover:bg-gray-50",
                        index === 0 ? "rounded-l-md" : "-ml-px",
                        index === tabs.length - 1 && "rounded-r-md"
                      )}
                      onClick={() => setSelectedTab(tab.value)}
                    > */}
                    {tab.label}
                    {/* </button> */}
                  </Link>
                ))}
              </span>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
