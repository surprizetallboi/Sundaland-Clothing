import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";

export default function Mens(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/items/categories/mens")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);

  const mensSet = data.filter((i) => i.catagory === "mens");

  const mensOnSale = data.filter(
    (i) => i.catagory === "mens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="mesn">
      {data.length && <Banner content={mensOnSale} />}
      {data.length && <Viewport content={mensSet} />}
    </div>
  );
}
