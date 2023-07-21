import React from "react";
import { TopBox } from "../components";

const HomeContainer = () => {
  return (
    <div className="p-3 bg-darkBlue w-full text-white grid gap-5 grid-cols-4 auto-rows-auto">
      <div className="p-2 border rounded-sm grid-column col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="p-2 border rounded-sm">Box2</div>
      <div className="p-2 border rounded-sm">Box3</div>
      <div className="p-2 border rounded-sm grid-column col-span-1 row-span-3">
        Box4
      </div>
      <div className="p-2 border rounded-sm">Box5</div>
      <div className="p-2 border rounded-sm">Box6</div>
      <div className="p-2 border rounded-sm grid-column col-span-2 row-span-2">
        Box7
      </div>
      <div className="p-2 border rounded-sm">Box8</div>
      <div className="p-2 border rounded-sm">Box9</div>
    </div>
  );
};

export default HomeContainer;
