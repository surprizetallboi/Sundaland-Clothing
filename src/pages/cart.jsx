import React from "react";
import "./cart.css"
import { CartContext } from '../context'
// import { useAddToCart } from "../context";
// import CartItem from "../comp/cartItem";

export default function Cart(){

const {cart, setCart } = React.useContext(CartContext)




function addToCart() {
  // setCart([]);
  setCart((oldCart) => [newItem, ...oldCart]);
}


  // const cartMap = cart.map(i =>{
  //   return(
  //     <CartItem
  //     key={i.id}
  //     name={i.name}
  //     price={i.price}
  //     description={i.description}
  //     color={i.color}
  //     cat={i.catagory}
  //     type={i.type}
  //     isOnSale={i.isOnSale}
  //     isInStock={i.isInStock}
  //     />
  //   )
  // })

    return(
        <div className="cart">
          cart
          {/* <button
          onClick={addToCart("dfwv")}>Click Me</button>
          {cartMap} */}
        </div>
    )
}