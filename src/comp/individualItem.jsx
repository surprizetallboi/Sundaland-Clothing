import React from 'react'
import { useCart } from "../CartContext"
import { useParams } from 'react-router-dom';
import ItemDisplay from './itemDisplay'
import "./itemDisplay.css";

export default function individualItem() {
    const { data } = useCart();

    // if (!data.length) return <div>Loading</div>;

    const { item } = useParams()
    console.log(`this is item num ${item}`);


  // return (
  //   <ItemDisplay className='canIPutClassNameHere'
  //   key={data[item].id}
  //   id={data[item].id}
  //   name={data[item].name}
  //   price={data[item].price}
  //   // description={data[item].description}
  //   color={data[item].color}
  //   cat={data[item].catagory}
  //   type={data[item].type}
  //   isOnSale={data[item].isOnSale}
  //   isInStock={data[item].isInStock}
  //   />
  // )
}
