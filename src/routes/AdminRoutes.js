import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../page/admin/ProductList";
import ProductUpload from "../page/admin/ProductUpload";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/upload" exact element={<ProductUpload />} />
      <Route path="/admin/products" exact element={<ProductList />} />
 </Routes>
  );
}
