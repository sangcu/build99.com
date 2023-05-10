"use client";

import {
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../../components/atoms";
import Link from "next/link";
import { Route } from "next";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { dw_goal_group_detail } from "./goals/exampleData";
import { dw_team_member_peer_review_overview_total } from "./team-members/exampleData";

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

const COLORS = [
  { fill: "#60a5fa", opacity: 1 },
  { fill: "#7dd3fc", opacity: 1 },
  { fill: "#a1a1aa", opacity: 0.7 },
];

const tasks = [
  {
    id: 1,
    name: "Goal assessment for Hector",
    targetDate: "2023-05-12",
    href: "#" as Route<string>,
  },
  {
    id: 2,
    name: "1-1 meetings with Blake",
    targetDate: "2023-05-14",
  },
  {
    id: 3,
    name: "Peer review for Leslie",
    targetDate: "2023-05-20",
    href: "#" as Route<string>,
  },
  {
    id: 4,
    name: "1-1 meetings with Fabricio",
    targetDate: "2023-05-25",
  },
];

const issues = [
  {
    id: 1,
    name: "Communication goal is being missed",
    href: "#" as Route<string>,
  },
  {
    id: 2,
    name: "70% your team members feel not good about social climate",
    href: "#" as Route<string>,
  },
  {
    id: 3,
    name: "64% did not completed peer review",
    href: "#" as Route<string>,
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    href: "#" as Route<string>,
  },
  {
    id: 5,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    href: "#" as Route<string>,
  },
];

const bestMembers = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/1/goals" as Route<string>,
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/2/goals" as Route<string>,
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/3/goals" as Route<string>,
  },
];

const unHappyMembers = [
  {
    id: 1,
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/1/goals" as Route<string>,
  },
  {
    id: 2,
    name: "Courtney Henry",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/2/goals" as Route<string>,
  },
  {
    id: 3,
    name: "Tom Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "/dashboard/team-members/3/goals" as Route<string>,
  },
];

export default function Home() {
  return (
    <div className="py-8 px-4 lg:px-8 w-full lg:grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-2 space-x-6">
          <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
              Top 3 high-performing members
            </div>
            <div className="px-4 py-2 sm:px-6">
              <ul role="list" className="divide-y divide-gray-100">
                {bestMembers.map((member) => (
                  <li key={member.id}>
                    <Link href={member.href} className="w-full">
                      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-2 sm:flex-nowrap">
                        <div className="w-full flex gap-x-4 items-center">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={member.imageUrl}
                            alt=""
                          />
                          <p className="text-sm font-semibold text-gray-900">
                            {member.name}
                          </p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
              Top 3 unhappy members
            </div>
            <div className="px-4 py-2 sm:px-6">
              <ul role="list" className="divide-y divide-gray-100">
                {unHappyMembers.map((member) => (
                  <li key={member.id}>
                    <Link href={member.href} className="w-full">
                      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-2 sm:flex-nowrap">
                        <div className="flex gap-x-4 items-center">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={member.imageUrl}
                            alt=""
                          />
                          <p className="text-sm font-semibold text-gray-900">
                            {member.name}
                          </p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
          <Link href="/dashboard/goals">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
              <div>{`How's the goal going?`}</div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </Link>
          <div className="px-4 py-2 sm:px-6 h-[440px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={dw_goal_group_detail.map((group) => ({
                  ...group,
                  fullMark: 100,
                }))}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="title" />
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
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-6">
          <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
              <div>{`How's your team performing?`}</div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="px-4 py-2 sm:px-6 h-[320px]">
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
                          fill={COLORS[index % COLORS.length].fill}
                          opacity={COLORS[index % COLORS.length].opacity}
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
          <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
            <Link href="/dashboard/engagement-experience">
              <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
                <div>{`How's your team engagement?`}</div>
                <ArrowRightIcon className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            <div className="px-4 py-2 sm:px-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Good", value: 72 },
                      { name: "Average", value: 20 },
                      { name: "Bad", value: 8 },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {[
                      { name: "Good", value: 72 },
                      { name: "Average", value: 20 },
                      { name: "Bad", value: 8 },
                    ].map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length].fill}
                        opacity={COLORS[index % COLORS.length].opacity}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
          <Link href="/dashboard/engagement-experience">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
              <div>{`How's your team engagement?`}</div>
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </Link>
          <div className="px-4 py-2 sm:px-6 h-[440px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={[
                  {
                    id: 1,
                    title: "People and relationships",
                    progress: 70,
                  },
                  {
                    id: 2,
                    title: "Teamwork",
                    progress: 70,
                  },
                  {
                    id: 3,
                    title: "Social climate",
                    progress: 85,
                  },
                  {
                    id: 4,
                    title: "Work organization",
                    progress: 75,
                  },
                  {
                    id: 5,
                    title: "Work control and flexibility",
                    progress: 45,
                  },
                  {
                    id: 6,
                    title: "Growth and rewards",
                    progress: 80,
                  },
                  {
                    id: 7,
                    title: "Purpose",
                    progress: 95,
                  },
                  {
                    id: 8,
                    title: "Technology",
                    progress: 60,
                  },
                  {
                    id: 9,
                    title: "Physical environment",
                    progress: 80,
                  },
                ].map((group) => ({
                  ...group,
                  fullMark: 100,
                }))}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="title" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Progress"
                  dataKey="progress"
                  stroke="#0284c7"
                  fill="#7dd3fc"
                  fillOpacity={0.6}
                  dot
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 space-y-4">
        <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 font-semibold">
            Tasks
          </div>
          <div className="px-4 py-2 sm:px-6">
            <ul role="list" className="divide-y divide-gray-100">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-2 sm:flex-nowrap"
                >
                  <div>
                    <p className="text-sm font-medium leading-6 text-gray-900">
                      {task.href ? (
                        <div className="hover:underline">
                          <Link href={task.href}>{task.name}</Link>
                        </div>
                      ) : (
                        <div>{task.name}</div>
                      )}
                    </p>
                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                      <p>
                        <time dateTime={task.targetDate}>
                          {task.targetDate}
                        </time>
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            Top 5 issues
          </div>
          <div className="px-4 py-2 sm:px-6">
            <ul role="list" className="divide-y divide-gray-100">
              {issues.map((issue) => (
                <li
                  key={issue.id}
                  className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-2 sm:flex-nowrap"
                >
                  <div>
                    <p className="text-sm font-medium leading-6 text-gray-900">
                      {issue.href ? (
                        <div className="hover:underline">
                          <Link href={issue.href}>{issue.name}</Link>
                        </div>
                      ) : (
                        <div>{issue.name}</div>
                      )}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
