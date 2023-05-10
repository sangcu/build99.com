"use client";

import {
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import {
  dw_team_member_peer_review_groups,
  dw_team_member_peer_review_overview_total,
} from "../../../../exampleData";

const COLORS = [
  { fill: "#60a5fa", opacity: 1 },
  { fill: "#7dd3fc", opacity: 1 },
  { fill: "#a1a1aa", opacity: 0.7 },
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

const Overview: React.FC = () => {
  const router = useRouter();
  const { groupId, id } = useParams() || {};
  const title = dw_team_member_peer_review_groups.find(
    (item) => item.id === Number(groupId)
  )?.title;

  return (
    <div>
      <div className="py-3 flex items-center space-x-4 w-full justify-between border-b border-gray-200 ">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/team-members/${id}/peer-reviews`}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
          </Link>
          <div>{title}</div>
        </div>
      </div>
      <div className="mt-16 text-center">
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
    </div>
  );
};

export default Overview;
