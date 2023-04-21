"use client";

import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {
  team_member_engagement_overview,
} from "../../exampleData";
import { useParams, useRouter } from "next/navigation";

const Overview: React.FC = () => {
  const router = useRouter();
  const { id } = useParams() || {};

  return (
    <div className="">
      <div className="py-3 flex items-center justify-between space-x-4 w-full border-b border-gray-200 ">
        What is the engagement experience of Hector Adams?
      </div>
      <div className="h-[540px] flex items-center justify-center py-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={team_member_engagement_overview}
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

export default Overview;
