import React, { useState, useEffect } from "react";
import "./cart.css";
import { useCart } from "../CartContext";
import CartItem from "../comp/cartItem";

export default function Cart() {
  const { cart, setCart } = useCart();
  const [data, setData] = useState([]);

  // if (!data.length) return <div>Loading</div>;

  useEffect(() => {
    async function fetchData() {
      const cartMap = cart.map(async (item) => {
        const response = await fetch(`http://localhost:3000/items/${item.id}`);
        const json = await response.json();
        return json;
      });
      const thingy = await Promise.all(cartMap);

      setData(thingy);
    }
    fetchData();
  }, []);

  // useEffect(()=>{

  const initialValue = 0;
  const preSubTotal = data.reduce(
    (accumulator, currentValue, i) =>
      accumulator + cart[i].quant * currentValue.price,
    initialValue
  );
  const subTotal = Math.ceil((preSubTotal + Number.EPSILON) * 100) / 100;

  // which items are discounted?
  const discountedItems = data.filter((i) => i.isOnSale);
  //take those and do math
  const preDiscountTotal = discountedItems.reduce(
    (accumulator, currentValue, i) =>
      accumulator + cart[i].quant * (currentValue.price * 0.2),
    initialValue
  );
  //round up
  const discountTotal =
    Math.ceil((preDiscountTotal + Number.EPSILON) * 100) / 100;

  // }, [data]);

  //keep price in state, run this in my map, and set state to price+new ammount

  console.log("cart", cart);
  console.log("data", data);

  const dataMap = data.map((item) => {
    return <CartItem item={item} key={item._id} />;
  });

  return (
    <div className="cart">
      {dataMap}
      {subTotal}
      <br />
      {discountTotal}
    </div>
  );
}

//take a shot every time he says millennials
