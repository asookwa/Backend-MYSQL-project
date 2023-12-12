import React from "react";

import { Route, Routes } from "react-router-dom";
import AddProduct from "./screens/AddProduct";
import ShowProducts from "./screens/ShowProducts";
import EditProduct from "./screens/EditProduct";
import ProductDetail from "./screens/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route exact path="/addProduct" element={<AddProduct />} />
      <Route exact path="/" element={<ShowProducts />} />
      <Route exact path="/product/edit/:id" element={<EditProduct />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
