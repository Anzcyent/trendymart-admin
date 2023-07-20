import React from "react";

import menuItems from "../utils/menuItems";

const Menu = () => {
  return (
    <div className="flex flex-col grow bg-darkBlue  lg:w-[10%] md:w-[15%] w-[100%] p-3">
      {menuItems.map((menuItem) => (
        <ul key={menuItem.id} className="flex flex-col justify-center mb-3">
          <li className="text-gray text-xs self-start font-bold">
            <small>{menuItem.title}</small>
          </li>
          {menuItem.items.map((item) => (
            <li
              key={item.id}
              className="text-white flex items-center text-sm mb-1 p-1 cursor-pointer hover:opacity-70 active:scale-95"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Menu;
