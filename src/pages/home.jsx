import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import { Spinner } from "grommet";
import Data from "../sundalandData";

export default function Home() {
  const [data, setData] = useState(Data);
  const [error, setError] = useState(null);
  

  //this doens't do anything because I couldn't get my backend to work on the internet
  // useEffect(() => {
  //   fetch("https://api.jerichopetcare.com/items/")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setData(response);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);
  // console.log(data);

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
