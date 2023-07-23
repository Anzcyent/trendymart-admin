import React from "react";
import { Footer, Menu, Navbar, Single } from "../components";

const Product = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <Single />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
