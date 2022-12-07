import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from './CartContext'

import Header from "./comp/header";

import Home from "../src/pages/home";
import Womens from "./pages/womens";
import Mens from "./pages/mens";
// import Girls from './pages/girls';
// import Boys from './pages/boys';

import Cart from "./pages/cart";

export default function App() {
  // const [cart, setCart] = React.useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );

  // React.useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // function addToCart(newItem) {
  //   setCart((oldCart) => [newItem, ...oldCart]);
  // }
  // function removeFromCart(event, itemID) {
  //   event.stopPropagation();
  // }

  return (
    <div className="App">
      <CartProvider>
        <Header />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/womens" element={<Womens />} />
        <Route exact path="/mens" element={<Mens />} />
        {/* <Route exact path="/girls" element={<Girls />} />
        <Route exact path="/boys" element={<Boys />} /> */}
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider> 
    </div>
  );
}

