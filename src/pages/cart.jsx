import React from "react";
import "./cart.css"
import { useCart } from '../CartContext'
import CartItem from "../comp/cartItem";
import Data from "../data.js";

export default function Cart(){

const { cart, setCart } = useCart()

console.log(cart);

  const cartMap = cart.map(i =>{
    return(
      <CartItem
      key={Data[i.id].id}
      id={Data[i.id].id}
      name={Data[i.id].name}
      price={Data[i.id].price}
      description={Data[i.id].description}
      color={Data[i.id].color}
      cat={Data[i.id].catagory}
      type={Data[i.id].type}
      isOnSale={Data[i.id].isOnSale}
      isInStock={Data[i.id].isInStock}
      quant={i.quant}
      />
    )
  })

    return(
        <div className="cart">
          {cartMap}
        </div>
    )
}