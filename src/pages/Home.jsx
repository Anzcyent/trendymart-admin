import React from "react";
import { Footer, Menu, Navbar } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
