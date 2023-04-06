"use client";

import { useParams, usePathname } from "next/navigation";
import { team_member_goal_groups } from "../../exampleData";
import classNames from "classnames";
import Link from "next/link";
import { Route } from "next";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, goalId, groupId } = useParams() || {};
  const pathName = usePathname();

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pb-8">
        <div className="overflow-y-auto w-[420px] border-r member-detail-content-area">
          <ul role="list" className="divide-gray-200 space-y-2 px-4 py-4">
            {team_member_goal_groups.map((goalGroup) => (
              <Disclosure
                key={goalGroup.id}
                as="div"
                className={classNames(
                  "cursor-pointer text-gray-900 w-full bg-white sm:rounded-lg"
                )}
              >
                {({ open }) => (
                  <>
                    <div
                      className={classNames(
                        "w-full flex justify-between items-center space-x-4 rounded-lg border-2",
                        Number(groupId) === goalGroup.id && "!border-sky-600"
                      )}
                    >
                      <Link
                        href={
                          Number(groupId) === goalGroup.id
                            ? `/dashboard/team-members/${id}/goals`
                            : `/dashboard/team-members/${id}/goals/group/${goalGroup.id}`
                        }
                        className={classNames(
                          "flex items-center space-x-2 text-lg pl-4 py-3 flex-1"
                        )}
                      >
                        {goalGroup.title}
                      </Link>
                      <Disclosure.Button className="pr-4">
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500`}
                        />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="mt-2">
                      {goalGroup.goals.map((goal) => (
                        <Link
                          key={goal.title}
                          href={
                            Number(goalId) === goal.id
                              ? `/dashboard/team-members/${id}/goals`
                              : `/dashboard/team-members/${id}/goals/${goal.id}/progress`
                          }
                        >
                          <div
                            className={classNames(
                              "cursor-pointer text-sm text-gray-900 px-4 py-3",
                              Number(goalId) === goal.id
                                ? "bg-sky-200 text-sky-600 font-medium bg-opacity-30"
                                : "hover:bg-sky-200 hover:bg-opacity-20"
                            )}
                          >
                            {goal.title}
                          </div>
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </ul>
        </div>
        <div className="mx-6 flex-1 pl-4 pt-4 overflow-y-auto member-detail-content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
