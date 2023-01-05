// import React, { useContext, useState } from "react";

// const CartContext = React.createContext();
// // const AddToCart = React.createContext();
// // const RemoveFromCart = React.createContext()

// export function useCart() {
//   return useContext(CartContext);
// }

// // export function useAddToCart() {
// //   return useContext(AddToCart);
// // }

// // export function useRemoveFromCart(){
// //     return useContext(RemoveFromCart)
// // }

// export function CartContextProvider({ children }) {

//   const [cart, setCart] = useState(
//     () => JSON.parse(localStorage.getItem("cart")) || []
//   );

//   React.useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

 

//   function removeFromCart(event, itemID) {
//     event.stopPropagation();
//   }

//   return (
//     <CartContext.Provider value={{cart}}>
//       {/* <AddToCart.Provider value={() => addToCart()}> */}
//         {/* <RemoveFromCart.Provider value={removeFromCart()}> */}
//         {children}
//         {/* </RemoveFromCart.Provider> */}
//       {/* </AddToCart.Provider> */}
//     </CartContext.Provider>
//   );
// }
