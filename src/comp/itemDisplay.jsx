import React from "react";
import "./itemDisplay.css";
import Data from "../data.js";
import { useCart } from '../CartContext'


export default function ItemDisplay(props) {
  const { cart, setCart } = useCart()

function addToCart(newItem){
  console.log(newItem);
  setCart(oldCart => [newItem, ...oldCart]);
}
  return (
    <div className="itemDisplay">
      <div className="padding">
        <div className="image"></div>
        <div className="name">{props.name}</div>
        <div className="row">
          <div className="price">{props.price}</div>
          <div className="color">{props.color}</div>
        </div>
        <div className="row">
          <div className="price">{props.cat}</div>
          <div className="color">{props.type}</div>
        </div>

        {/* <button className="addToCart" onClick={addToCart(D)}> */}
        <button className="addToCart" onClick={() => addToCart(Data[props.id - 1])}>
          Add To Cart
        </button>

        <div className="onSale">
          {props.isOnSale && props.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
        <div className="InStock">
          {!props.isInStock && <div className="inStockBadge">Out of Stock</div>}
        </div>
      </div>
    </div>
  );
}
