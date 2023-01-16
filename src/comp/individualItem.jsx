import React from 'react'
import { useCart } from "../CartContext"
import { useParams } from 'react-router-dom';
import ItemDisplay from './itemDisplay'
import "./itemDisplay.css";

export default function individualItem() {
    const { data } = useCart();
    const { item } = useParams()
    if (!data.length) return <div>Loading</div>;
    
  return (
    <ItemDisplay className='canIPutClassNameHere'
    key={data[Number(item)].id}
    id={data[Number(item)].id}
    name={data[Number(item)].name}
    price={data[Number(item)].price}
    // description={data[Number(item)].description}
    color={data[Number(item)].color}
    cat={data[Number(item)].catagory}
    type={data[Number(item)].type}
    isOnSale={data[Number(item)].isOnSale}
    isInStock={data[Number(item)].isInStock}
    />
  )
}
