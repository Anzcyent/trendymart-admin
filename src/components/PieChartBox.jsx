import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Tshirt", value: 400, color: "#0088FE" },
  { name: "Coat", value: 300, color: "#00C49F" },
  { name: "Pant", value: 300, color: "#FFBB28" },
  { name: "Sweetshirt", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="p-2 font-urbanist w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-2xl self-start mb-5">Leads By Source</h1>

      <div className="w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={`cell-${item.name}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-evenly w-full">
        {data.map((item) => (
          <div className="flex mx-1" key={item.name}>
            <span
              className="w-1 h-1 rounded-full sm:mr-3 mr-1"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex flex-col text-xs leading-5">
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
