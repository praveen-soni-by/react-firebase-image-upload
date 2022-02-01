import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import Products from "../page/Products";
import ProductUpload from "../page/admin/ProductUpload";
import Dashboard from "../page/admin/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="products" element={<Products />} />
   </Routes>
  );
}
