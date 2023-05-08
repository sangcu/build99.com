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
import {
  engagement_factor_groups,
  engagement_progress,
} from "../exampleData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const GoalDetail: React.FC = () => {
  const { id } = useParams() || {};

  const goalDetail = engagement_factor_groups
    .flatMap((group) => [
      ...group.factors.map((factor) => ({
        ...factor,
        groupId: group.id,
      })),
    ])
    .find((g) => g.id === Number(id));

  return (
    <div className="bg-white overflow-hidden">
      <div className="py-4 px-4 flex items-center space-x-4 w-full justify-between border-b border-gray-200 ">
        <div className="flex items-center space-x-4">
          <Link href={`/dashboard/engagement-experience`}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
          </Link>
          <div>{`How about ${goalDetail?.title}?`}</div>
        </div>
      </div>
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
            <Legend />
            {engagement_progress.map((item) => (
              <Line
                name={item.name}
                key={item.name}
                dataKey="value"
                data={item.data}
                type="monotone"
                stroke={item.color}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GoalDetail;
