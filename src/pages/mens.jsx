import React from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
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
      {data.length && <Viewport content={mensSet} />}
    </div>
  );
}
