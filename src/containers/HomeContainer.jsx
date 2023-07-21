import React from "react";
import { TopBox, ChartBox } from "../components";
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from "../utils/chartBox";

const HomeContainer = () => {
  return (
    <div className="p-3 bg-darkBlue w-full text-white grid gap-5 grid-cols-4 auto-rows-auto">
      <div className="p-2 border rounded-sm grid-column col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="p-2 border rounded-sm grid-column col-span-1 row-span-3">
        Box4
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="p-2 border rounded-sm grid-column col-span-2 row-span-2">
        Box7
      </div>
      <div className="p-2 border rounded-sm">Box8</div>
      <div className="p-2 border rounded-sm">Box9</div>
    </div>
  );
};

export default HomeContainer;
