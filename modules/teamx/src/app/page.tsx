"use client";

import { Navigations, TeamMemberList } from "./components";
import useQueryTeamMembers from "@/hooks/useQueryTeamMember";

export default function Home() {
  const { data: memberList, isLoading, isError } = useQueryTeamMembers();

  return (
    <>
      <div
        className="z-[10] lg:fixed top-0 left-0 h-full w-1/2 bg-white"
        aria-hidden="true"
      />
      <div
        className="z-[10] lg:fixed top-0 right-0 h-full w-1/2 bg-gray-50"
        aria-hidden="true"
      />
      <div className="z-[100] min-w-0 flex-1 bg-white xl:flex content-area">
        <div className="pt-4 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 sm-px-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Brilliant Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Solving high performance thoughput.
              </p>
            </div>

            {isLoading && (
              <div className="mt-20 w-full flex justify-center">
                <svg
                  className="animate-spin h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}

            {isError && (
              <div className="mt-12 text-center text-red-600 text-lg font-semibold">
                Something went wrong on loading team members
              </div>
            )}
            {memberList && <TeamMemberList memberList={memberList || []} />}
          </div>
        </div>
      </div>
      <Navigations />
    </>
  );
}
