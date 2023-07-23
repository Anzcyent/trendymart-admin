import React from "react";
import { Footer, Menu, Navbar, Single } from "../components";
import { singleProduct } from "../utils/single";

const Product = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <Single {...singleProduct} />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
