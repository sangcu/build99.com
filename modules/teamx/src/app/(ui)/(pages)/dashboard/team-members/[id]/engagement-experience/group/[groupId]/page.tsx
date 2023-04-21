"use client";

import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  LabelList,
} from "recharts";
import { useParams } from "next/navigation";
import {
  team_member_engagement_factor_groups,
  team_member_engagement_group_overview,
} from "../../../../exampleData";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const GoalGroupOverview: React.FC = () => {
  const { id, groupId } = useParams() || {};
  const title = team_member_engagement_factor_groups.find(
    (group) => group.id === Number(groupId)
  )?.title;

  return (
    <div className="bg-white overflow-hidden">
      <div className="py-3 flex items-center space-x-4 w-full justify-between border-b border-gray-200 ">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/team-members/${id}/engagement-experience`}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
          </Link>
          <div>{`How about Hector Adams's ${title}`}</div>
        </div>
      </div>
      <div className="h-[540px] flex items-center justify-center py-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={team_member_engagement_group_overview}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={48}
          >
            <XAxis dataKey="title" />
            <Tooltip />
            <Bar dataKey="value" fill="#0ea5e9">
              <LabelList
                dataKey="value"
                fill="white"
                formatter={(label: any) => (label > 0 ? label : null)}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GoalGroupOverview;
