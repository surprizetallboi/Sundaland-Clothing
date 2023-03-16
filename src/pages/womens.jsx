import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import Data from "../sundalandData";


export default function Womens() {
  
  // this doens't do anything because I couldn't get my backend to work on the internet
     const [data, setData] = useState(Data);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.jerichopetcare.com/items/categories/womens")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setData(response);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);

  const isWomens = data.filter((i) => i.category === 'womens');

  const womensOnSale = isWomens.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="womens">
      <Banner content={womensOnSale} />
      <Viewport key={isWomens[0]._id} content={isWomens} />
    </div>
  );
}
