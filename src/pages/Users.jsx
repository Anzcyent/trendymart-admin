import React from "react";
import { Navbar, Menu, Footer } from "../components";
import { UserContainer } from "../containers";

const Users = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <UserContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Users;
