import React from "react";
import Data from "../data";
import Veiwport from "../comp/veiwport";
import Banner from "../comp/banner";

export default function Home(props) {
  const allData = Data;
  const allOnSale = Data.filter((i) => i.isOnSale && i.isInStock);

  return (
    <div className="home">
      <Banner content={allOnSale} />
      <Veiwport key={allData[0].id} content={allData} />
    </div>
  );
}
