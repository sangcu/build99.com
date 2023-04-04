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
import { truncate } from "lodash";
import { dw_team_member_goal_overview } from "../../exampleData";

const Overview: React.FC = () => {
  return (
    <div className="">
      <div className="h-[540px] flex items-center justify-center py-8">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={dw_team_member_goal_overview.map((group) => ({
              ...group,
              title: truncate(group.title),
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
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
