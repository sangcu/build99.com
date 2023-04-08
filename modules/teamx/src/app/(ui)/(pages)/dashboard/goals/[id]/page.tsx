"use client";

import { Button } from "@/app/(ui)/components/atoms";
import {
  ChartBarIcon,
  CheckIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { dw_goal_details, goalGroupList } from "../exampleData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const GoalDetail: React.FC = () => {
  const { id } = useParams() || {};

  const goalData = goalGroupList
    .flatMap((group) => [
      ...group.goals.map((goal) => ({
        ...goal,
        groupId: group.id,
      })),
    ])
    .find((goal) => goal.id === Number(id));

  const { title, updatePeriod, startDate, endDate, metric, start, target } =
    goalData || {};

  return (
    <>
      <div className="py-3 flex items-center space-x-4 w-full">
        <Link href={`/dashboard/goals/group/${goalData?.groupId}`}>
          <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
        </Link>
        <div>{goalData?.title}</div>
      </div>
      <div className="mt-2 bg-white overflow-hidden rounded-lg shadow">
        <div className="px-6 py-3 flex items-center justify-between w-full border-b border-gray-200 ">
          Progress
        </div>
        <div className="h-[540px] flex items-center py-8 relative">
          <div className="absolute -top-1 w-[70%] border-t-4 border-sky-600 h-2 text-right text-xs pt-2">
            70%
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              // data={}
              margin={{
                top: 5,
                right: 50,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis
                dataKey="datetime"
                type="number"
                domain={[
                  new Date("2023-01-01").getTime(),
                  new Date("2024-01-01").getTime(),
                ]}
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              {/* <Tooltip formatter={}/> */}
              <Legend />
              {/* <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              /> */}
              {dw_goal_details.data.map((s) => (
                <Line
                  dataKey="value"
                  data={s.data}
                  name={s.name}
                  key={s.name}
                  type="monotone"
                  stroke={s.color}
                />
              ))}
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 bg-white overflow-hidden rounded-lg shadow">
        <div className="px-6 py-3 flex items-center justify-between w-full space-x-4">
          <div>{title}</div>
        </div>
        <div className="border-t border-gray-200 border-t border-gray-200 relative">
          <div className="px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="col-span-2 grid grid-cols-5 border p-4">
                <div className="flex space-x-2 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <div>Specific</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <div>Measurable</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <div>Achievable</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <div>Relevant</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                  <div>Time bound</div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Duration</dt>
                <dd className="mt-1 text-sm text-gray-900">{`${startDate} ~ ${endDate}`}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Update period
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{updatePeriod}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Metric</dt>
                <dd className="mt-1 text-sm text-gray-900">{metric}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Target</dt>
                <dd className="mt-1 text-sm text-gray-900">{target}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Assign To</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul role="list" className="grid grid-cols-3">
                    {[
                      {
                        name: "Calvin Hawkins",
                        image:
                          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      },
                      {
                        name: "Kristen Ramos",
                        image:
                          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      },
                      {
                        name: "Ted Fox",
                        image:
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      },
                    ].map((person) => (
                      <li key={person.name} className="flex py-4 items-center">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={person.image}
                          alt=""
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {person.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalDetail;
