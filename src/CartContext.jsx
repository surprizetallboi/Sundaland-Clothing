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

  function addToCart(newItemID) {
    const cartItem = cart.find((cartItem) => cartItem.id === newItemID);
    // cartItem will become the ID number of a match, or be false
    if (!cartItem) {
      // var newCartItem = { id: newItemID, quant: 1 }
      setCart((oldCart) => [{ id:newItemID, quant:1 }, ...oldCart]);
    } else {
      const newQuant = cartItem.quant + 1;
      setCart((oldCart) => [(cartItem.quant = newQuant), ...oldCart]);
    }
  }

  function emptyCart(){
    setCart([{ id: 3, quant: 1 }])
  }

  function removeFromCart(itemId) {
    setCart(cart.filter((v) => v.id !== itemId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, emptyCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
