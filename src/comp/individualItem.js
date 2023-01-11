import React from 'react'
import { useCart } from "../CartContext"

export default function individualItem() {
    const { data } = useCart();
    if (!data.length) return <div>Loading</div>;


  return (
    <div>individualItem</div>
  )
}
