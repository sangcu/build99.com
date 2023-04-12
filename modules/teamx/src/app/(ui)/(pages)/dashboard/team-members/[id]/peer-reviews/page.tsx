"use client";

import {
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import {
  dw_team_member_peer_review_overview_current,
  dw_team_member_peer_review_overview_total,
} from "../../exampleData";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

const data = [
  { name: "Exceed Expectation", value: 300 },
  { name: "Meet Expectation", value: 300 },
  { name: "Under Expectation", value: 400 },
];

const COLORS = ["#16a34a", "#3b82f6", "#dc2626"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
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
    <>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="flex space-x-12">
          <div className="">
            <div className="block bg-white overflow-hidden h-full w-40">
              <div className="text-lg font-semibold">Business Impacts</div>
              <div className="mt-1 w-full bg-sky-400 p-4 text-white">
                <div>
                  <span className="text-4xl font-bold">98.7</span>
                  <span>%</span>
                </div>
                <div className="mt-1 text-base">
                  agreed that you're performing very well and is a key driver in
                  the team
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="block bg-white overflow-hidden h-full w-40">
              <div className="text-lg font-semibold">Behaviors</div>
              <div className="mt-1 w-full bg-sky-400 p-4 text-white h-full">
                <div>
                  <span className="text-4xl font-bold">78</span>
                  <span>%</span>
                </div>
                <div className="mt-1 text-base">
                  want to work with you in future
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  {dw_team_member_peer_review_overview_total.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
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
                  {dw_team_member_peer_review_overview_total.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
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
    </>
  );
};

export default Overview;
