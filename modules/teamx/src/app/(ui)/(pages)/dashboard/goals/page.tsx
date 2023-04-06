"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { dw_goal_group_detail } from "./exampleData";

const Overview: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="px-6 py-3 w-full border-b border-gray-200 ">Overview</div>
      <div className="h-[540px] flex items-center justify-center py-8">
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
            <PolarAngleAxis
              dataKey="title"
              onClick={(data, index, event) => {
                console.log("data", data);
                console.log("index", index);

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
            {/* <Legend /> */}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
