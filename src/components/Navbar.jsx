import React from "react";
import { AiOutlineSearch, AiOutlineAppstore, AiOutlineMenu } from "react-icons/ai";
import { RxEnterFullScreen } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full bg-darkBlue text-white p-3 flex justify-between items-center font-urbanist">
      <div className="flex items-center">
        <img src="/assets/admin.png" alt="logo" className="w-10" />
        <span className="font-bold sm:text-base text-sm">Admin</span>
      </div>


      <div className="flex items-center max-[550px]:hidden">
        <AiOutlineSearch className="font-bold mx-1 cursor-pointer hover:opacity-70 active:scale-95" />
        <AiOutlineAppstore className="font-bold mx-1 cursor-pointer hover:opacity-70 active:scale-95" />
        <RxEnterFullScreen className="font-bold mx-1 cursor-pointer hover:opacity-70 active:scale-95" />
        <IoIosNotificationsOutline className="font-bold mx-1 cursor-pointer hover:opacity-70 active:scale-95" />
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/343727949_760057792478826_4077595679829236736_n.jpg?ccb=11-4&oh=01_AdSwsMXmZI_Lo0e5r69A-9mDsDB4hVAIsM5NE4xcN4vXzw&oe=64C62E00"
          alt="pp"
          className="w-5 h-5 rounded-full mx-1 cursor-pointer hover:opacity-70 active:scale-95"
        />
        <small className="font-bold text-xs mx-1 cursor-pointer hover:opacity-70 active:scale-95">Cihan</small>
        <FiSettings className="font-bold mx-1 cursor-pointer hover:opacity-70 active:scale-95" />
      </div>

      {/* RESPONSIVE */}
      <div className="sm:hidden">
        <AiOutlineMenu className="cursor-pointer hover:opacity-70 active:scale-95" />
      </div>

    </nav>
  );
};

export default Navbar;
