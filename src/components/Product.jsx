import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
      <p className="mb-4 text-gray-700">{product.description}</p>
      <Link
        to={`products/${product.id}`}
        className="hover:underline text-blue-500"
      >
        View Details
      </Link>
    </div>
  );
};
