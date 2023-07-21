import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
    {
        name: "Sun",
        tshirths: 4000,
        pants: 2400,
        coats: 2400
    },
    {
        name: "Mon",
        tshirths: 3000,
        pants: 1398,
        coats: 2210
    },
    {
        name: "Tue",
        tshirths: 2000,
        pants: 9800,
        coats: 2290
    },
    {
        name: "Wed",
        tshirths: 2780,
        pants: 3900,
        coats: 2000
    },
    {
        name: "Thu",
        tshirths: 1580,
        pants: 6500,
        coats: 1500
    },
    {
        name: "Fri",
        tshirths: 3200,
        pants: 3500,
        coats: 4000
    },
    {
        name: "Sat",
        tshirths: 6150,
        pants: 4200,
        coats: 1750
    },
]

const BigChartBox = () => {
  return (
    <div className="p-2 font-urbanist">
      <h1 className="font-bold text-2xl mb-5">Revenue Analaytics</h1>

      <div className="w-full h-full flex flex-col justify-between">
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="tshirths"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pants"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="coats"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
