"use client";

import { Loading } from "@/components/atoms";
import { Navigations, TeamMemberList } from "./components";
import useQueryTeamMembers from "@/hooks/useQueryTeamMember";
import useRandomSelect from "@/hooks/useRandomSelect";

export default function Home() {
  const { data: memberList, isLoading, isError } = useQueryTeamMembers();
  const { isSelected, randomize } = useRandomSelect(
    memberList?.filter((id) => !!id)?.map((member) => member.id as number) || []
  );

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

            {isLoading && <Loading />}

            {isError && (
              <div className="mt-12 text-center text-red-600 text-lg font-semibold">
                Something went wrong on loading team members
              </div>
            )}
            {memberList && (
              <TeamMemberList
                memberList={
                  memberList?.map((member) => ({
                    ...member,
                    isSelected: isSelected(member?.id),
                  })) || []
                }
              />
            )}
          </div>
        </div>
      </div>
      <Navigations
        navigations={[
          { name: "Who's next", onClick: randomize },
          { name: "Create vote", onClick: () => {} },
          { name: "360 Feedbacks", onClick: () => {} },
        ]}
      />
    </>
  );
}
