"use client";

import { Button } from "@/app/(ui)/components/atoms";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { orderBy } from "lodash";
import { useState } from "react";
import { dw_team_member_goal_history } from "../../exampleData";

const OneOnOneMeetingsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("mismatch-assessment");

  const tabs = [
    {
      label: "Mismatch",
      value: "mismatch-assessment",
      active: true,
    },
    {
      label: "Histories",
      value: "histories",
      active: false,
    },
  ];

  return (
    <div className="px-6 pt-4">
      <div className="w-full flex justify-end">
        <div className="isolate inline-flex rounded-md shadow-sm">
          {tabs.map((tab, index) => (
            <div
              key={tab.value}
              className={classNames(
                "cursor-pointer w-32 flex-1 justify-center relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10",
                selectedTab === tab.value
                  ? "bg-sky-100"
                  : "bg-white hover:bg-gray-50",
                index === 0 ? "rounded-l-md" : "-ml-px",
                index === tabs.length - 1 && "rounded-r-md"
              )}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      {selectedTab === "mismatch-assessment" && (
        <div className="mt-12">
          <div className="w-full grid grid-cols-9 gap-8">
            <div className="col-span-3"></div>
            <div className="col-span-2 font-semibold">
              {"Manager's Assessment"}
            </div>
            <div className="col-span-2 font-semibold">Self Assessment</div>
            <div></div>
          </div>
          <div className="mt-6 divide-y">
            <div className="w-full grid grid-cols-9 gap-8 py-2">
              <div className="col-span-3 flex items-center text-gray-900">
                All assigned task delivered on time
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Under Expectation
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Meet Expectation
              </div>
              <div className="col-span-2 flex items-center justify-end">
                <Button>Schedule</Button>
              </div>
            </div>
            <div className="w-full grid grid-cols-9 gap-8 py-2">
              <div className="col-span-3 flex items-center text-gray-900">
                Deep understanding about project domain, project tech stack
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Meet Expectation
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Exceed Expectation
              </div>
              <div className="col-span-2 flex items-center justify-end">
                <Button>Schedule</Button>
              </div>
            </div>
            <div className="w-full grid grid-cols-9 gap-8 py-2">
              <div className="col-span-3 flex items-center text-gray-900">
                100% delivered on time with no complain in quality from clients,
                leaders
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Meet Expectation
              </div>
              <div className="col-span-2 flex items-center text-gray-900">
                Exceed Expectation
              </div>
              <div className="col-span-2 flex items-center justify-end text-gray-900">
                14:00 2023/04/24
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedTab === "histories" && (
        <div className="mt-8 space-y-2">
          {orderBy(dw_team_member_goal_history, "datetime").map((item) => (
            <Disclosure key={item.datetime}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-100-900 hover:bg-gray-100-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-100-500 focus-visible:ring-opacity-75">
                    <span>{item.datetime.toLocaleDateString()}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-100-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2">
                    <div className="grid grid-cols-2 gap-16">
                      <div>
                        <div className="font-semibold text-center">
                          {"Manager's Assessment"}
                        </div>
                        <dl className="mt-4 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                Actual
                              </dt>
                              <dd className="text-sm text-gray-900">
                                Under Expectation
                              </dd>
                            </div>
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                Updated
                              </dt>
                              <dd className="text-sm text-gray-900">
                                Under Expectation
                              </dd>
                            </div>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Note
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              Duis ultricies lacus sed turpis tincidunt id.
                              Velit euismod in pellentesque massa placerat duis
                              ultricies lacus. Facilisi cras fermentum odio eu
                              feugiat pretium nibh. Sagittis orci a scelerisque
                              purus semper. Maecenas pharetra convallis posuere
                              morbi.
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <div className="font-semibold text-center">
                          Self Assessment
                        </div>
                        <dl className="mt-4 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                Actual
                              </dt>
                              <dd className="text-sm text-gray-900">
                                Under Expectation
                              </dd>
                            </div>
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                Updated
                              </dt>
                              <dd className="text-sm text-gray-900">
                                Under Expectation
                              </dd>
                            </div>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">
                              Note
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              Duis ultricies lacus sed turpis tincidunt id.
                              Velit euismod in pellentesque massa placerat duis
                              ultricies lacus. Facilisi cras fermentum odio eu
                              feugiat pretium nibh. Sagittis orci a scelerisque
                              purus semper. Maecenas pharetra convallis posuere
                              morbi.
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      )}
    </div>
  );
};

export default OneOnOneMeetingsPage;
