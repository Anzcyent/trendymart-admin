import React, { useEffect } from "react";
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

const Single = ({ id, img, title, info, chart, activities }) => {
  useEffect(() => {
    alert(
      "Because this is just a template, you won't see the details of the product/user you clicked. You will see a dummy user/product."
    );
  }, []);
  return (
    <div className="p-3 flex md:flex-row flex-col bg-darkBlue text-white w-full flex font-urbanist">
      <div className="md:w-1/2 w-full flex flex-col">
        <div className="h-1/2">
          <div className="flex items-center gap-5 mb-5">
            {img && (
              <img
                src={img}
                alt={id + "/img"}
                className="w-10 rounded-lg object-cover"
              />
            )}

            <h1 className="font-semibold">{title}</h1>
            <button className="bg-red px-3 py-1 font-light hover:opacity-80 active:scale-95">
              Update
            </button>
          </div>
          <div>
            {Object.entries(info).map((item, i) => (
              <div key={i + "@123"} className="flex text-sm mb-4">
                <span className="font-semibold">{item[0]}: &nbsp;</span>
                <span>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="w-4/5 h-0 md:block hidden" />

        <div className="md:block hidden h-1/2 mt-5 w-4/5 h-[400px]">
          {chart && (
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
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
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="md:w-1/2 w-full md:mt-0 mt-5">
        <h2 className="mb-5 text-red md:text-2xl text-lg">Latest Activities</h2>
        <ul className="md:w-2/3 w-full md:text-base text-sm">
          {activities &&
            activities.map((activity, i) => (
              <li
                key={i + activity.text}
                className="text-white bg-[#333040] my-5 p-3"
              >
                <div>
                  <p>{activity.text}</p>
                  <span className="font-bold text-gray">{activity.time}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
