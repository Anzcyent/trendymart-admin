import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Products, User, Users } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/user/:id" element={<User />} />
      <Route exact path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
