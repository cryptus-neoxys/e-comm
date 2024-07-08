import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import { Product } from "./Product";

export const ProductList = () => {
  console.log(ProductContext);
  const { products } = useContext(ProductContext);

  return (
    <div className="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
