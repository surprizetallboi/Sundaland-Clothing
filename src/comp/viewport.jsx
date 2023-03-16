import React from 'react'
import ItemDisplay from './itemDisplay'
import "./viewport.css"

export default function Viewport(props) {
  
  const itemsDisplayed = props.content.map(i =>{
    return(
    <ItemDisplay className='canIPutClassNameHere'
    key={i._id}
    item={i}
    />
  )})

  return (
    <div className='viewport'>
  <div className='ItemDisplay'>{itemsDisplayed}</div>

    </div>
  )
}
