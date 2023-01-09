import React from "react";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";
// import Data from "../data.js";
import { useCart } from "../CartContext";

export default function Mens(props) {
  const { data } = useCart();

  const mensSet = data.filter((i) => i.catagory === "mens");

  const mensOnSale = data.filter(
    (i) => i.catagory === "mens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="mesn">
      {data.length && <Banner content={mensOnSale} />}
      {data.length && <Veiwport content={mensSet} />}
    </div>
  );
}
