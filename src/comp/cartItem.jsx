import React from "react";
import "./cartItem.css";
import { useCart } from "../CartContext";

export default function CartItem(props) {
  const { removeFromCart, addToCart } = useCart();

  return (
    <div className="cartItem">
      <div className="padding">
        <button onClick={() => removeFromCart(props.item._id)}>
          <div className="image">
          <div className="name">{props.item.name}</div>
          </div>
        </button>
        <div className="row">
        {!props.item.isOnSale && <div className="price">{props.item.price}</div>}
          {props.item.isOnSale && <div className="oldPrice">{props.item.price}</div>}
          {props.item.isOnSale && <div className="disPrice">{Math.ceil((props.item.price*.8)*100)/100}</div>}

          <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./sale-badge.png" width={50} />
          )}
        </div>

          <div className="color">{props.item.color}</div>
        </div>
        <div className="row">
          <div className="price">{props.item.category}</div>
          <div className="color">{props.item.type}</div>
        </div>
        <div className="quant" onClick={() => addToCart(props.item._id)}>{props.item.quant}</div>

        <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
      </div>
      <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
    </div>
  );
}
