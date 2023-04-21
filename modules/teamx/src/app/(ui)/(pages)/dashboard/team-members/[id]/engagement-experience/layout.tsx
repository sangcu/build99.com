"use client";

import { useParams, usePathname } from "next/navigation";
import {
  team_member_engagement_factor_groups,
} from "../../exampleData";
import classNames from "classnames";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, egamentFactorId, groupId } = useParams() || {};
  const pathName = usePathname();

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pb-8">
        <div className="overflow-y-auto w-[420px] border-r member-detail-content-area">
          <ul role="list" className="divide-gray-200 space-y-2 px-4 py-4">
            {team_member_engagement_factor_groups.map((group) => (
              <Disclosure
                key={group.id}
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
                        Number(groupId) === group.id && "!border-sky-600"
                      )}
                    >
                      <Link
                        href={
                          Number(groupId) === group.id
                            ? `/dashboard/team-members/${id}/engagement-experience`
                            : `/dashboard/team-members/${id}/engagement-experience/group/${group.id}`
                        }
                        className={classNames(
                          "flex items-center space-x-2 text-lg pl-4 py-3 flex-1"
                        )}
                      >
                        {group.title}
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
                      {group.factors.map((factor) => (
                        <Link
                          key={factor.title}
                          href={
                            Number(egamentFactorId) === factor.id
                              ? `/dashboard/team-members/${id}/engagement-experience`
                              : `/dashboard/team-members/${id}/engagement-experience/${factor.id}/progress`
                          }
                        >
                          <div
                            className={classNames(
                              "cursor-pointer text-sm text-gray-900 px-4 py-3",
                              Number(egamentFactorId) === factor.id
                                ? "bg-sky-200 text-sky-600 font-medium bg-opacity-30"
                                : "hover:bg-sky-200 hover:bg-opacity-20"
                            )}
                          >
                            {factor.title}
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
