import React from "react";
import { Footer, Menu, Navbar } from "../components";
import { HomeContainer } from "../containers";

const Home = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <HomeContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
