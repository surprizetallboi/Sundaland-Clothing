import React from "react";
// import "./cartItem.css";

export default function CartItem(props) {
  return (
    <div className="cartItem">
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
