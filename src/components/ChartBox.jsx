import React from "react";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const ChartBox = ({
  title,
  icon,
  number,
  chartData,
  dataKey,
  color,
  percentage,
}) => {
  return (
    <div className="flex p-2 h-full font-urbanist justify-between">
      <div className="flex flex-col h-full w-1/2">
        <div className="flex">
          {icon}
          <span className="text-sm ml-2 font-bold">{title}</span>
        </div>

        <h1 className="text-4xl font-bold grow flex items-center">{number}</h1>

        <Link
          to="/"
          className="font-bold hover:opacity-90 active:slace-95"
          style={{ color }}
        >
          View All
        </Link>
      </div>

      <div className="flex flex-col h-full justify-between w-1/2">
        <div className="w-full flex h-full">
          <ResponsiveContainer width="99%" height="50%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col">
          <span
            className="font-bold text-2xl self-end"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <small className="self-end">this month</small>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
