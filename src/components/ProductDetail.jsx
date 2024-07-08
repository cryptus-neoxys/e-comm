import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  console.log(products);

  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
      <p className="mb-4 text-gray-700">{product.description}</p>
      <p className="mb-4 text-gray-700">Price: {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
};
