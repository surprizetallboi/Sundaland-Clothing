import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
// import { useCart } from "../CartContext";

export default function Womens() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //this doens't do anything because I couldn't get my backend to work on the internet
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

  const womensOnSale = data.filter(
    (i) => i.isOnSale && i.isInStock
  );

  return (
    <div className="womens">
      {data.length && <Banner content={womensOnSale} />}
      {data.length && <Viewport content={data} />}
    </div>
  );
}
