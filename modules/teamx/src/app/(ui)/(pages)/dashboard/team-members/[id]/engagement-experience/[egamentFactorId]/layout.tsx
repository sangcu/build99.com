"use client";

import { useParams, usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { Route } from "next";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { team_member_engagement_factor_groups } from "../../../exampleData";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, egamentFactorId, groupId } = useParams() || {};
  const pathName = usePathname();
  const goalDetail = team_member_engagement_factor_groups
    .flatMap((group) => [
      ...group.factors.map((factor) => ({
        ...factor,
        groupId: group.id,
      })),
    ])
    .find((g) => g.id === Number(egamentFactorId));

  const tabs = [
    {
      value: "progress",
      label: "Progress",
      href: `/dashboard/team-members/${id}/engagement-experience/${egamentFactorId}/progress` as Route<string>,
      active:
        pathName === `/dashboard/team-members/${id}/engagement-experience/${egamentFactorId}/progress`,
    },
    {
      value: "histories",
      label: "Histories",
      href: `/dashboard/team-members/${id}/engagement-experience/${egamentFactorId}/histories` as Route<string>,
      active:
        pathName === `/dashboard/team-members/${id}/engagement-experience/${egamentFactorId}/histories`,
    },
  ];

  return (
    <div>
      <div className="py-3 flex items-center space-x-4 w-full border-b border-gray-200 ">
        <Link
          href={`/dashboard/team-members/${id}/goals/group/${goalDetail?.groupId}`}
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
        </Link>
        <div>{goalDetail?.title}</div>
      </div>
      <div className="mt-4 flex justify-end">
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
              {tab.label}
            </Link>
          ))}
        </span>
      </div>
      {children}
    </div>
  );
};

export default Layout;
