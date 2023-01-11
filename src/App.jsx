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
        {/* <Route exact part={`/item/${x}`} element={<Cart item={x} />} /> */}
      </Routes>
      </CartProvider> 
    </div>
  );
}

