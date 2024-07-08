import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-4 text-white bg-gray-800">
      <nav className="container flex justify-between mx-auto">
        <Link to="/" className="text-lg font-bold">
          E-commerce
        </Link>
        <div>
          <Link to="/cart" className="ml-4">
            🛒 Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};
