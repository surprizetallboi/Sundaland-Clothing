import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDisplay from './itemDisplay'
import "./itemDisplay.css";

export default function individualItem() {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { item } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/items/${item}`)
      .then((response) => response.json())
      .then((response) => { 
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);

    
  return (
    <ItemDisplay className='canIPutClassNameHere'
    key={data.id}
    id={data.id}
    name={data.name}
    price={data.price}
    // description={data.description}
    color={data.color}
    cat={data.catagory}
    type={data.type}
    isOnSale={data.isOnSale}
    isInStock={data.isInStock}
    />
  )
}