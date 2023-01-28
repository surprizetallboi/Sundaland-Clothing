import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import { Spinner } from "grommet";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/items/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);


  if (!data.length)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  const allOnSale = data.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="home">
      <Banner content={allOnSale} />
      <Viewport content={data} />
    </div>
  );
}
