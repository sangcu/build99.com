"use client";

import { ChevronLeftIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  dw_team_member_peer_review_history,
  dw_team_member_peer_review_items,
  dw_team_member_peer_review_overview_current,
  dw_team_member_peer_review_overview_total,
  dw_team_member_peer_review_progress,
} from "../../../exampleData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { orderBy } from "lodash";
import { Disclosure } from "@headlessui/react";

const data = [
  {
    datetime: new Date("2023-01-01").getTime(),
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    datetime: new Date("2023-02-01").getTime(),
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    datetime: new Date("2023-03-01").getTime(),
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    datetime: new Date("2023-04-01").getTime(),
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    datetime: new Date("2023-05-01").getTime(),
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    datetime: new Date("2023-06-01").getTime(),
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    datetime: new Date("2023-07-01").getTime(),
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
  index: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#16a34a", "#3b82f6", "#dc2626"];

const PeerReviewItem: React.FC = () => {
  const { id } = useParams() || {};
  const tabs = [
    {
      label: "Overview",
      value: "overview",
      active: true,
    },
    {
      label: "Progress",
      value: "progress",
      active: false,
    },
    {
      label: "Histories",
      value: "histories",
      active: false,
    },
  ];
  const title = dw_team_member_peer_review_items.find(
    (item) => item.id === Number(id)
  )?.title;

  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div>
      <div className="py-3 flex items-center space-x-4 w-full justify-between border-b border-gray-200 ">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/team-members/${id}/peer-reviews`}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
          </Link>
          <div>{title}</div>
        </div>
        <div className="isolate inline-flex rounded-md shadow-sm">
          {tabs.map((tab, index) => (
            <div
              key={tab.value}
              className={classNames(
                "cursor-pointer w-28 flex-1 justify-center relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10",
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
      {selectedTab === "overview" && (
        <div className="mt-16 flex space-x-8 text-center">
          <div className="flex-1">
            <div className="text-lg font-semibold">Total</div>
            <div className="h-[320px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dw_team_member_peer_review_overview_total}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dw_team_member_peer_review_overview_total.map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      )
                    )}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold">Current</div>

            <div className="h-[320px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dw_team_member_peer_review_overview_current}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dw_team_member_peer_review_overview_current.map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      )
                    )}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
      {selectedTab === "progress" && (
        <div className="mt-8 h-[540px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={dw_team_member_peer_review_progress}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="datetime"
                type="number"
                domain={[
                  new Date("2022-11-01").getTime(),
                  new Date("2023-09-01").getTime(),
                ]}
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis domain={[0, 6]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Under Expectation" stackId="a" fill="#dc2626" />
              <Bar dataKey="Meet Expectation" stackId="a" fill="#3b82f6" />
              <Bar dataKey="Exeed Expectation" stackId="a" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {selectedTab === "histories" && (
        <div className="w-full pt-8">
          <div className="mx-auto w-full rounded-2xl bg-white space-y-4">
            {orderBy(dw_team_member_peer_review_history, "datetime").map(
              (item) => (
                <Disclosure key={item.datetime.toISOString()}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-100-900 hover:bg-gray-100-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-100-500 focus-visible:ring-opacity-75">
                        <span>{item.datetime.toLocaleDateString()}</span>
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
                              Assessment
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {item.assessment}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Note
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Duis ultricies lacus sed
                              turpis tincidunt id. Velit euismod in pellentesque
                              massa placerat duis ultricies lacus. Facilisi cras
                              fermentum odio eu feugiat pretium nibh. Sagittis
                              orci a scelerisque purus semper. Maecenas pharetra
                              convallis posuere morbi.
                            </dd>
                          </div>
                        </dl>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerReviewItem;
