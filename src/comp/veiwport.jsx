import React from 'react'
import ItemDisplay from './itemDisplay'
import "./viewport.css"

export default function Veiwport({content}) {

  const itemsDisplayed = content.map(i =>{
    return(
    <ItemDisplay className='canIPutClassNameHere'
    key={i.id}
    name={i.name}
    price={i.price}
    // description={i.description}
    color={i.color}
    cat={i.catagory}
    type={i.type}
    isOnSale={i.isOnSale}
    isInStock={i.isInStock}
    />
  )})

  return (
    <div className='viewport'>
  <div className='ItemDisplay'>{itemsDisplayed}</div>

    </div>
  )
}
