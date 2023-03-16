import React, { useState, useEffect } from "react";
import "./cart.css";
import { useCart } from "../CartContext";
import CartItem from "../comp/cartItem";
// import Data from "../sundalandData";


export default function Cart() {
  const { cart, setCart } = useCart();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cartMap = cart.map(async (item) => {
        const response = await fetch(`https://api.jerichopetcare.com/items/${item._id}`);
        const json = await response.json();
        response.quant = item.quant;
        return json;
      });
      const thingy = await Promise.all(cartMap);
      thingy.forEach((i) => {
        const cartI = cart.findIndex((x) => x._id === i._id);
        return (i.quant = cart[cartI].quant);
      });
      setData(thingy);
    }
    fetchData();
  }, [cart]);

  const initialValue = 0;
  const preSubTotal = data.reduce(
    (accumulator, currentValue, i) =>
      accumulator + data[i].quant * currentValue.price,
    initialValue
  );
  const subTotal = Math.ceil((preSubTotal + Number.EPSILON) * 100) / 100;

  // which items are discounted?
  const discountedItems = data.filter((i) => i.isOnSale);
  //take those and do math
  const preDiscountTotal = discountedItems.reduce(
    (accumulator, currentValue, i) =>
      accumulator + data[i].quant * (currentValue.price * 0.2),
    initialValue
  );
  //round up
  const discountTotal =
    Math.ceil((preDiscountTotal + Number.EPSILON) * 100) / 100;



  const preTaxTotal = Math.ceil((subTotal-discountTotal)*100)/100
  const tax =  Math.ceil((preTaxTotal*.0825)*100)/100
  const total = Math.ceil((preTaxTotal+tax)*100)/100

  // keep price in state, run this in my map, and set state to price+new ammount

  const dataMap = data.map((item) => {
    return <CartItem item={item} key={item._id} />;
  });

  if (!data.length) return <div>Loading</div>;

  return (
    <div className="cart">
      {dataMap}
      {subTotal}
      <br />
      {discountTotal}
      <br />
      {preTaxTotal}
      <br />
      {tax}
      <br />
      {total}
    </div>
  );
}

//take a shot every time he says millennials
