"use client";

import { orderBy, truncate } from "lodash";
import { Disclosure } from "@headlessui/react";
import { dw_team_member_goal_history } from "../../../../exampleData";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const History: React.FC = () => {
  return (
    <div className="w-full pt-8">
      <div className="mx-auto w-full rounded-2xl bg-white space-y-4">
        {orderBy(dw_team_member_goal_history, "datetime").map((item) => (
          <Disclosure key={item.datetime}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-100-900 hover:bg-gray-100-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-100-500 focus-visible:ring-opacity-75">
                  <span>{item.datetime}</span>
                  <div className="flex space-x-4">
                    <div className="text-gray-900">{item.createdBy}</div>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-100-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div className="sm:col-span-1 flex items-center space-x-4">
                      <dt className="text-sm font-medium text-gray-500">
                        Updated Progress:
                      </dt>
                      <dd className="text-sm text-gray-900">80%</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        Note
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis ultricies lacus sed turpis tincidunt
                        id. Velit euismod in pellentesque massa placerat duis
                        ultricies lacus. Facilisi cras fermentum odio eu feugiat
                        pretium nibh. Sagittis orci a scelerisque purus semper.
                        Maecenas pharetra convallis posuere morbi.
                      </dd>
                    </div>
                  </dl>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default History;
