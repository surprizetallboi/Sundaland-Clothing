import React, { useContext, useState, useEffect } from "react";
// import Data from "../data";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";
import { useCart } from "../CartContext";

export default function Home(props) {
  const { data } = useCart();
  if (!data.length) return <div>Loading</div>;

  const allOnSale = data.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="home">
      {<Banner content={allOnSale} />}
      {<Veiwport content={data} />}
    </div>
  );
}

