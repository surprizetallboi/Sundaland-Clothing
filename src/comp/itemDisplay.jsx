import React from "react";
import "./itemDisplay.css";
import { useCart } from "../CartContext";
import { Button } from "grommet";

export default function ItemDisplay(props) {
  const { cart, setCart, addToCart, emptyCart } = useCart();

  return (
    <div className="itemDisplay">
      <div className="padding">
      <a href={`/items/${props.item._id}`}>
        
          <div className="image"></div>
          <div className="name">{props.item.name}</div>
          <div className="row">
          {!props.item.isOnSale && <div className="price">{props.item.price}</div>}
          {props.item.isOnSale && <div className="oldPrice">{props.item.price}</div>}
          {props.item.isOnSale && <div className="disPrice">{Math.ceil((props.item.price*.8)*100)/100}</div>}
            <div className="color">{props.item.color}</div>
          </div>
          <div className="row">
            <div className="price">{props.item.catagory}</div>
            <div className="color">{props.item.type}</div>
          </div>

          

          <div className="onSale">
            {props.item.isOnSale && props.item.isInStock && (
              <img src="./sale-badge.png" width={50} />
            )}
          </div>
          <div className="InStock">
            {!props.item.isInStock && (
              <div className="inStockBadge">Out of Stock</div>
            )}
          </div>
        
      </a>
      <button
            className="addToCart"
            onClick={() => addToCart(props.item._id)}>
                      Add To Cart
          </button>
          </div>
    </div>
  );
}
