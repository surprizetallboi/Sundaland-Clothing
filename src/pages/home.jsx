import React from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import { useCart } from "../CartContext";
import { Spinner } from "grommet";

export default function Home(props) {
  const { data } = useCart();
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
