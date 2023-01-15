import React from "react";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";
import { useCart } from "../CartContext";

export default function Womens(props) {
  const { data } = useCart();

  const womensSet = data.filter((i) => i.catagory === "womens");
  const womensOnSale = data.filter(
    (i) => i.catagory === "womens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="womens">
      {data.length && <Banner content={womensOnSale} />}
      {data.length && <Veiwport content={womensSet} />}
    </div>
  );
}
