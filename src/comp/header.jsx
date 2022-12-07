import React from "react";
import "./header.css";
import { CartProvider } from '../CartContext'

export default function Header() {
const { cart } = React.useContext(CartContext)

  function itemsInCart(){
  if (cart.length === 0){
   return " is empty"
  } else if (cart.length === 1){
return " has 1 item"
  } else{
    return ` has ${cart.length} items`
  }}
  
  return (
    <div className="header">
      <a href="/" className="headerTitle">
        SUNDALAND
      </a>
      <a href="/womens" className="catHeader">
        Womens
      </a>
      <a href="/mens" className="catHeader">
        Mens
      </a>
      <a href="/girls" className="catHeader">
        Girls
      </a>
      <a href="/boys" className="catHeader">
        Boys
      </a>
      <div className="space" />
      <a href="/cart" className="headerCart">
        Cart {itemsInCart()}
      </a>
      <div className="search">
        <div className="searchWord">Search</div>
      </div>
    </div>
  );
}
