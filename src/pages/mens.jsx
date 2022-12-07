import React from "react";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";
import Data from "../data.js";

export default function Mens(props) {
  const mensSet = Data.filter((i) => i.catagory === "mens");

  const mensOnSale = Data.filter(
    (i) => i.catagory === "mens" && i.isOnSale && i.isInStock
  );

  return (
    <div className="mesn">
      <Banner content={mensOnSale} />
      <Veiwport key={mensSet[0].id} content={mensSet}/>
    </div>
  );
}
