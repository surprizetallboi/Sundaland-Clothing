import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import Data from "../sundalandData";

export default function Mens() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  //this doens't do anything because I couldn't get my backend to work on the internet
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

  const isMens = Data.filter((i) => i.category === 'mens');

  const mensOnSale = isMens.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="mesn">
      <Banner content={mensOnSale} />
      <Viewport key={isMens[0]._id} content={data} />
    </div>
  );
}
