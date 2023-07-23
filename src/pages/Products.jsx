import React from "react";
import { Footer, Menu, Navbar } from "../components";
import ProductContainer from "../containers/ProductContainer";

const Products = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex grow">
        <Menu />
        <ProductContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
