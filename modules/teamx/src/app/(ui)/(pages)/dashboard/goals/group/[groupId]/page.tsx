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
} from "recharts";
import { truncate } from "lodash";
import { dw_goal_group_lists, goalGroupList } from "../../exampleData";
import { useParams } from "next/navigation";

const GoalGroupOverview: React.FC = () => {
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

  console.log("goalGroupData", goalGroupData);

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="px-6 py-3 flex items-center justify-between w-full border-b border-gray-200 ">
        <div>{title}</div>
        <Button className="bg-white !text-red-600 !border-red-600">
          Delete
        </Button>
      </div>
      <div className="h-[540px] flex items-center justify-center py-8">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={goalGroupData}>
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

export default GoalGroupOverview;
