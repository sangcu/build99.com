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
import { dw_member_goal_details } from "../../../../exampleData";

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
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          {dw_member_goal_details.data.map((s) => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              type="monotone"
              stroke={s.color}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Progress;
