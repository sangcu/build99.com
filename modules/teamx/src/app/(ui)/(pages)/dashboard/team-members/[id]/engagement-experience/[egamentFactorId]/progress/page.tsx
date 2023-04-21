"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { team_member_engagement_progress } from "../../../../exampleData";

const Progress: React.FC = () => {
  return (
    <div className="h-[440px] flex items-center justify-center py-8">
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
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line
            dataKey="value"
            data={team_member_engagement_progress}
            type="monotone"
            stroke="#0ea5e9"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Progress;
