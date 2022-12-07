import React from "react";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";
import Data from "../data.js";

export default function Womens(props) {
  const womensSet = Data.filter((i) => i.catagory === "womens");

  const womensOnSale = Data.filter(
    (i) => i.catagory === "womens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="womens">
      <Banner content={womensOnSale} />
      <Veiwport key={womensSet[0].id} content={womensSet} />
    </div>
  );
}
