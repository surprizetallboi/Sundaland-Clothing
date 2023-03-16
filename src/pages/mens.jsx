import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";

export default function Mens() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://99.140.253.135:3455/items/categories/mens")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);


  const mensOnSale = data.filter(
    (i) => i.isOnSale && i.isInStock
  );

  return (
    <div className="mesn">
      {data.length && <Banner content={mensOnSale} />}
      {data.length && <Viewport content={data} />}
    </div>
  );
}
