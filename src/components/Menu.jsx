import React from "react";
import menuItems from "../utils/menuItems";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:items-start items-center bg-darkBlue lg:w-[10%] md:w-[15%] w-[20%] p-3 font-urbanist">
      {menuItems.map((menuItem) => (
        <ul key={menuItem.id} className="flex flex-col justify-center mb-3">
          <li className="text-gray text-xs self-start font-bold">
            <small className="max-[1050px]:hidden">{menuItem.title}</small>
          </li>
          {menuItem.items.map((item) => (
            <li
              key={item.id}
              onClick={!item.disabled ? () => navigate(item.routeUrl) : null}
              className="text-white flex items-center text-sm mb-1 p-1 hover:opacity-70 active:scale-95"
              style={{cursor: item.disabled ? "not-allowed" : "pointer"}}
            >
              {item.icon}
              <span className="max-[1050px]:hidden">{item.name}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Menu;
