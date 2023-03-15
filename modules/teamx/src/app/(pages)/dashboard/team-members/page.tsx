"use client";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Button, Loading } from "@/app/components/atoms";
import { Navigations, TeamMemberList, TeamHeader } from "./components";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { toModelList } from "@/app/models/team-members";

import useQueryTeamMemberList from "./hooks/useQueryTeamMemberList";
import useRandomSelect from "./hooks/useRandomSelect";
import useQueryTeamInfo from "@/app/hooks/useQueryTeamInfo";

export default function TeamList() {
  const { data } = useQueryTeamInfo();

  const {
    data: memberDtoList,
    isLoading,
    isError,
  } = useQueryTeamMemberList(data?.id);

  const memberList = toModelList(memberDtoList || []);

  const { isSelected, randomize } = useRandomSelect(
    memberList?.filter((id) => !!id)?.map((member) => member.id as number) || []
  );
  const router = useRouter();

  const navigations = [
    { name: "Who's next", onClick: randomize },
    { name: "Create vote", onClick: () => {} },
    { name: "360 Feedbacks", onClick: () => {} },
  ];

  return (
    <div className="lg:flex">
      <div className="z-min-w-0 flex-1 xl:flex bg-white content-area">
        <div className="pt-4 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 sm-px-4">
            <TeamHeader />
            {isLoading && <Loading containerClassName="mt-20" />}

            {isError && (
              <div className="mt-12 text-center text-red-600 text-lg font-semibold">
                Something went wrong on loading team members
              </div>
            )}
            {!isLoading && !isError && (
              <>
                <div className="mt-4 lg:mt-8">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          as="div"
                          className="flex lg:hidden w-full justify-between items-center text-sm font-medium focus:outline-none focus-visible:ring"
                        >
                          <div className="flex-1 pr-8">
                            <Button
                              onClick={() =>
                                router.push("/dashboard/team-members/add-new")
                              }
                              className="!w-full !bg-orange-600"
                            >
                              Create New Member
                            </Button>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-4 px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-100 rounded-md space-y-2">
                          {navigations?.map((naviation) => (
                            <div key={naviation.name}>
                              <button
                                key={naviation?.name}
                                type="button"
                                onClick={naviation.onClick}
                                className="rounded-md text-base text-right font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                              >
                                {naviation.name}
                              </button>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                {memberList && (
                  <TeamMemberList
                    memberList={memberList.map((member) => ({
                      ...member,
                      isSelected: isSelected(member?.id),
                    }))}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
        <div className="hidden lg:block pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
          <Navigations navigations={navigations} />
        </div>
      </div>
    </div>
  );
}
