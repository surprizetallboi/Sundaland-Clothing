import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
  }

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
