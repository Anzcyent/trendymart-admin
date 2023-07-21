import React from "react";

import topDealUsers from "../utils/topDealUsers";

const TopBox = () => {
  return (
    <div className="p-2 font-urbanist">
      <h1 className="font-bold text-2xl">Top Deals</h1>
      <div>
        {topDealUsers.map((user) => (
          <div className="mt-5 flex justify-between items-center px-4" key={user.id}>
            <div className="flex items-center">
              <img
                src={user.img}
                alt="user pp"
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />

              <div className="flex flex-col">
                <small className="font-bold shadow-lg">{user.username}</small>
                <small>{user.email}</small>
              </div>
            </div>

            <span className="font-bold">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
