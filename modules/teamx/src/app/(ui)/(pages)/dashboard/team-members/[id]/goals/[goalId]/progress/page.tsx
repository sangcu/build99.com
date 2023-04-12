"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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
          // data={}
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
            type="number"
            domain={[
              new Date("2023-01-01").getTime(),
              new Date("2024-01-01").getTime(),
            ]}
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
          />
          <YAxis />
          {/* <Tooltip formatter={}/> */}
          <Legend />
          {/* <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              /> */}
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
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Progress;
