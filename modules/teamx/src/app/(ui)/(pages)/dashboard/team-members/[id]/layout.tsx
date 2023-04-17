"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { team_members } from "../exampleData";
import { Route } from "next";

const Template: React.FC<{
  params: { id: string };
  children: React.ReactNode;
}> = ({ params, children }) => {
  const { id } = params || {};
  const pathName = usePathname();
  const tabs = [
    {
      name: "Goals",
      href: `/dashboard/team-members/${id}/goals` as Route<string>,
      current: pathName?.startsWith(`/dashboard/team-members/${id}/goals`),
    },
    {
      name: "Peer Reviews",
      href: `/dashboard/team-members/${id}/peer-reviews` as Route<string>,
      current: pathName?.startsWith(
        `/dashboard/team-members/${id}/peer-reviews`
      ),
    },
    {
      name: "1-1 meetings",
      href: `/dashboard/team-members/${id}/1-1-meetings` as Route<string>,
      current: pathName?.startsWith(
        `/dashboard/team-members/${id}/1-1-meetings`
      ),
    },
    {
      name: "Profile",
      href: `/dashboard/team-members/${id}` as Route<string>,
      current: pathName === `/dashboard/team-members/${id}`,
    },
  ];

  const selectedMember = team_members.find(
    (member) => member.id === Number(id)
  );

  if (!selectedMember) return null;

  return (
    <div className="flex flex-1 flex-col px-6 pt-6">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <Link
                href="/dashboard/team-members"
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Members
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                {selectedMember.name}
              </div>
            </div>
          </li>
        </ol>
      </nav>
      <div className="mt-4 flex flex-1 max-h-full pb-8">
        <div className="flex-1 overflow-y-auto h-full">
          <div className="p-6 bg-white overflow-hidden rounded-lg shadow col-span-2 h-full">
            <article className="h-full">
              <div>
                <div className="mx-auto px-4 sm:px-4">
                  <div className="sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={selectedMember?.profilePhoto}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                        <h1 className="truncate text-2xl font-bold text-gray-900">
                          {selectedMember.name}
                        </h1>
                        <p className="text-gray-500 text-sm">
                          {selectedMember?.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="mx-auto px-4 sm:px-4">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <Link
                          prefetch
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? "border-sky-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className="">{children}</div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
