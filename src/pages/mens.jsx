import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import Data from "../sundalandData";

export default function Mens() {
  
  // this doens't do anything because I couldn't get my backend to work on the internet
     const [data, setData] = useState(Data);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.jerichopetcare.com/items/categories/mens")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setData(response);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);

  const isMens = data.filter((i) => i.category === 'mens');

  const mensOnSale = isMens.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="mens">
      <Banner content={mensOnSale} />
      <Viewport key={isMens[0]._id} content={isMens} />
    </div>
  );
}
