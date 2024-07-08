import React from "react";
import { ProductList } from "../components/ProductList";

export const HomePage = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">Products</h1>
      <ProductList />
    </div>
  );
};
