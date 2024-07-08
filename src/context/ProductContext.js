import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProcuctProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30,
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
