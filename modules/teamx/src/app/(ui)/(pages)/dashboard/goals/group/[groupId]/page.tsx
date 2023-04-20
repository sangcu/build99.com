"use client";

import { Button } from "@/app/(ui)/components/atoms";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";
import { truncate } from "lodash";
import {
  dw_goal_group_lists,
  goalGroupList,
  goal_detail_progress,
} from "../../exampleData";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const GoalGroupOverview: React.FC = () => {
  const router = useRouter();
  const { groupId } = useParams() || {};
  const title = goalGroupList.find(
    (group) => group.id === Number(groupId)
  )?.title;

  const goalGroupData = dw_goal_group_lists
    .find((goal) => goal.id === Number(groupId))
    ?.goals.map((goal) => ({
      ...goal,
      fullMark: 100,
      title: truncate(goal.title, { length: 20 }),
    }));

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
  ];
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="px-6 py-3 flex items-center space-x-4 w-full justify-between border-b border-gray-200 ">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/goals`}>
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
      <div className="h-[540px] flex items-center justify-center py-8">
        {selectedTab === "overview" && (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={goalGroupData}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="title"
                onClick={(data, index) => {
                  router.push(`/dashboard/goals/${goalGroupData?.[index].id}`);
                }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Progress"
                dataKey="progress"
                stroke="#0284c7"
                fill="#7dd3fc"
                fillOpacity={0.6}
                dot
              />
              <Radar
                name="Expectation"
                dataKey="target"
                stroke="#9ca3af"
                fill="#9ca3af"
                fillOpacity={0.2}
                dot
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        )}
        {selectedTab === "progress" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
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
                type="category"
                allowDuplicatedCategory={false}
              />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              {goal_detail_progress.map((s) => (
                <Line
                  dataKey="value"
                  data={s.data}
                  name={s.name}
                  key={s.name}
                  type="monotone"
                  stroke={s.color}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default GoalGroupOverview;
