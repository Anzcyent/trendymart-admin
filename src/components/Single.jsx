import React from "react";
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Single = () => {
  return (
    <div className="p-3 bg-darkBlue text-white w-full flex font-urbanist">
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2">
          <div className="flex items-center gap-5 mb-5">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/343727949_760057792478826_4077595679829236736_n.jpg?ccb=11-4&oh=01_AdSwsMXmZI_Lo0e5r69A-9mDsDB4hVAIsM5NE4xcN4vXzw&oe=64C62E00"
              alt="user"
              className="w-10 rounded-lg object-cover"
            />
            <h1 className="font-semibold">John Doe</h1>
            <button className="bg-red px-3 py-1 font-light hover:opacity-80 active:scale-95">
              Update
            </button>
          </div>
          <div>
            <div className="flex text-sm mb-4">
              <span className="font-semibold">Item Title: &nbsp;</span>
              <span>Item Value</span>
            </div>
            <div className="flex text-sm mb-4">
              <span className="font-semibold">Item Title: &nbsp;</span>
              <span>Item Value</span>
            </div>
            <div className="flex text-sm mb-4">
              <span className="font-semibold">Item Title: &nbsp;</span>
              <span>Item Value</span>
            </div>
          </div>
        </div>

        <hr className="w-4/5 h-0" />

        <div className="h-1/2 mt-5 w-4/5 h-[400px]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className="w-1/2">
        <h2 className="mb-5 text-red text-2xl">Latest Activities</h2>
        <ul className="w-2/3">
          <li className="text-white bg-[#333040] my-5 p-3">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos!
              </p>
              <span className="font-bold">3 day ago</span>
            </div>
          </li>
          <li className="text-white bg-[#333040] my-5 p-3">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos!
              </p>
              <span className="font-bold">3 day ago</span>
            </div>
          </li>
          <li className="text-white bg-[#333040] my-5 p-3">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos!
              </p>
              <span className="font-bold">3 day ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
