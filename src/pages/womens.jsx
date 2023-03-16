import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
// import { useCart } from "../CartContext";

export default function Womens() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://99.140.253.135:3455/items/categories/womens")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);

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
