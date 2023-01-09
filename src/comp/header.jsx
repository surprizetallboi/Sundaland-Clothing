import React from "react";
import "./header.css";
import { useCart } from '../CartContext'

export default function Header() {
const { cart, emptyCart } = useCart()

const initialValue = 0;
const numOfItems = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.quant,
  initialValue
);

  function itemsInCart(){
  if (numOfItems === 0){
   return " is empty"
  } else if (numOfItems === 1){
return " has 1 item"
  } else{
    return ` has ${numOfItems} items`
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
        <div className="searchWord" onClick={() => emptyCart()}>Search</div>
      </div>
    </div>
  );
}
