import React from "react";
import "./cart.css";
import { useCart } from "../CartContext";
import CartItem from "../comp/cartItem";

export default function Cart() {
  const { cart, data, setCart } = useCart();

  const initialValue = 0;
  const preSubTotal = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quant * data[currentValue.id].price,
    initialValue
  );
  const subTotal = Math.ceil((preSubTotal + Number.EPSILON) * 100) / 100;

  // which items are discounted?
  const discountedItems = cart.filter((i) => data[i.id].isOnSale);
  //take those and do math
  const preDiscountTotal = discountedItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quant * (data[currentValue.id].price * 0.2),
    initialValue
  );
  //round up
  const discountTotal =
    Math.ceil((preDiscountTotal + Number.EPSILON) * 100) / 100;

  const cartMap = cart.map((i) => {
    return (
      <CartItem
        key={data[i.id].id}
        id={data[i.id].id}
        name={data[i.id].name}
        price={data[i.id].price}
        description={data[i.id].description}
        color={data[i.id].color}
        cat={data[i.id].catagory}
        type={data[i.id].type}
        isOnSale={data[i.id].isOnSale}
        isInStock={data[i.id].isInStock}
        quant={i.quant}
      />
    );
  });

  return (
    <div className="cart">
      {cartMap}
      
      {subTotal}
      <br />
      {discountTotal}
    </div>
  );
}

//take a shot every time he says millennials
