import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="mb-2 text-2xl font-bold">Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4">
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
