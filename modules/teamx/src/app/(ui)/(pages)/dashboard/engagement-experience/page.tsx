"use client";

import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { engagement_overview } from "./exampleData";

const Overview: React.FC = () => {

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="px-6 py-3 flex items-center justify-between space-x-4 w-full border-b border-gray-200 ">
        <div> What is the engagement experience of your team?</div>
      </div>
      <div className="h-[540px] flex items-center justify-center py-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={engagement_overview}
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
