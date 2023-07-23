import React from "react";
import { TopBox, ChartBox, BarChartBox, PieChartBox, BigChartBox } from "../components";

import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
} from "../utils/chartBox";

import { barChartBoxRevenue, barChartBoxVisit } from "../utils/barChartBox";

const HomeContainer = () => {
  return (
    <div className="p-3 bg-darkBlue w-full text-white grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 auto-rows-auto">
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
        <PieChartBox />
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-2 border rounded-sm">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="p-2 border rounded-sm grid-column col-span-2 row-span-2 md:block hidden">
        <BigChartBox />
      </div>
      <div className="p-2 border rounded-sm">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="p-2 border rounded-sm">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default HomeContainer;
