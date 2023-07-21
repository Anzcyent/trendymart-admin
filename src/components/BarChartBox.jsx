import React from "react";
import { BarChart, ResponsiveContainer, Bar, Tooltip } from "recharts";

const BarChartBox = ({ title, chartData, color, dataKey }) => {
  return (
    <div className="p-1 font-urbanist w-full h-full">
      <h1 className="font-bold mb-3">{title}</h1>

      <div className="h-full">
        <ResponsiveContainer width="99%" height="80%">
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#272e3d", borderRadius: "5px" }}
              labelStyle={{display: "none"}}
              cursor={{fill: "none"}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
