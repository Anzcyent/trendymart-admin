import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Users } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/users" element={<Users />} />
    </Routes>
  );
};

export default App;
