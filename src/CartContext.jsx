import React, { useContext, useState, useEffect } from "react";

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
    const cartI = cart.findIndex((cartItem) => cartItem.id === newItemID);
    // cartItem will become the ID number of a match, or be false
    if (cartI < 0) {
      const newCartItem = { id: newItemID, quant: 1 };
      setCart((oldCart) => [newCartItem, ...oldCart]);
    } else {
      const oldCartItem = cart[cartI];
      oldCartItem.quant++;
      const newCartBeforeItem = cart.slice(0, cartI);
      const newCartAfterItem = cart.slice(cartI + 1);
      setCart([...newCartBeforeItem, oldCartItem, ...newCartAfterItem]);
    }
  }

  function removeFromCart(itemId) {
    const cartI = cart.findIndex((cartItem) => cartItem.id === itemId);

    if (cart[cartI].quant === 1) {
      setCart(cart.filter((v) => v.id !== itemId));
    } else {
      const oldCartItem = cart[cartI];
      oldCartItem.quant--;
      const newCartBeforeItem = cart.slice(0, cartI);
      const newCartAfterItem = cart.slice(cartI + 1);
      setCart([...newCartBeforeItem, oldCartItem, ...newCartAfterItem]);
    }
  }

  function emptyCart() {
    setCart([]);
  }

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/items/")
      .then((response) => response.json())
      .then((response) => { 
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);


  return (
    <CartContext.Provider
      value={{ cart, data, addToCart, emptyCart, removeFromCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
