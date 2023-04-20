"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { truncate } from "lodash";
import {
  dw_team_member_goal_group_overview,
  dw_team_member_goal_group_progress,
} from "../../exampleData";
import { useParams, useRouter } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";

const Overview: React.FC = () => {
  const router = useRouter();
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
  ];

  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="">
      <div className="py-3 flex items-center justify-between space-x-4 w-full border-b border-gray-200 ">
        <div>Goal Categories</div>
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
              data={dw_team_member_goal_group_overview.map((group) => ({
                ...group,
                title: truncate(group.title),
                fullMark: 100,
              }))}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="title"
                onClick={(_, index) => {
                  router.push(
                    `/dashboard/team-members/${id}/goals/group/${dw_team_member_goal_group_overview[index].id}`
                  );
                }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Actual"
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
              {dw_team_member_goal_group_progress.map((s) => (
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

export default Overview;
