"use client";

import { Button } from "@/app/(ui)/components/atoms";
import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { goalGroupList } from "./exampleData";
import Link from "next/link";
import { useParams } from "next/navigation";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { groupId, id } = useParams() || {};

  return (
    <div className="content-area flex flex-1 flex-col pl-4 pr-4 lg:pl-8 lg:pr-8 pt-8">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-semibold">Goals</h1>
        <Button className="hidden lg:block" onClick={() => {}}>
          Add New Goal
        </Button>
      </div>
      <div className="mt-8 flex flex-1 max-h-full">
        <div className="overflow-y-auto w-[440px] space-y-4 pr-4 border-r-2 border-gray-300 pb-8">
          {goalGroupList.map((goalGroup) => (
            <Disclosure
              key={goalGroup.id}
              as="div"
              className={classNames(
                "cursor-pointer text-gray-900 w-full bg-white shadow sm:rounded-lg border-2 border-transparent",
                Number(groupId) === goalGroup.id && "!border-sky-600"
              )}
            >
              {({ open }) => (
                <>
                  <div className="w-full flex justify-between items-center space-x-4">
                    <Link
                      href={
                        Number(groupId) === goalGroup.id
                          ? "/dashboard/goals"
                          : `/dashboard/goals/group/${goalGroup.id}`
                      }
                      className={classNames(
                        "flex items-center space-x-2 text-lg pl-4 py-4 flex-1"
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
                  <Disclosure.Panel className="divide-y border-t">
                    {goalGroup.goals.map((goal) => (
                      <Link
                        key={goal.title}
                        href={
                          Number(id) === goal.id
                            ? "/dashboard/goals"
                            : `/dashboard/goals/${goal.id}`
                        }
                      >
                        <div
                          className={classNames(
                            "cursor-pointer text-sm text-gray-900 px-4 py-3",
                            Number(id) === goal.id
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
        </div>
        <div className="flex-1 pl-8 overflow-y-auto pb-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
