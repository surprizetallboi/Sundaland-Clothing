import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
// import { useCart } from "../CartContext";

export default function Womens(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/items/categories/womens")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);

  const womensSet = data.filter((i) => i.catagory === "womens");
  const womensOnSale = data.filter(
    (i) => i.catagory === "womens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="womens">
      {data.length && <Banner content={womensOnSale} />}
      {data.length && <Viewport content={womensSet} />}
    </div>
  );
}
