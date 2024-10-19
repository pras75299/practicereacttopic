import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart1 = useContext(CartContext);
  const Total = cart1.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <ul>
        {cart1 &&
          cart1.items.map((item) => {
            return (
              <li>
                {item.name} price- ${item.price}
              </li>
            );
          })}
      </ul>
      <h5>Total bill - ${Total}</h5>
    </div>
  );
};

export default Cart;
