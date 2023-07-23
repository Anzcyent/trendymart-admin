import React from "react";
import { Footer, Menu, Navbar, Single } from "../components";
import { singleUser } from "../utils/single";

const User = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <Single {...singleUser} />
      </div>
      <Footer />
    </div>
  );
};

export default User;
