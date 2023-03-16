import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDisplay from "../comp/itemDisplay";
import "./indvItemDisplay.css";
import { useCart } from "../CartContext";
import Data from "../sundalandData";

// import ItemsLikeThis from "../comp/itemsLikeThis"

export default function indvItemDisplay() {
  const { addToCart } = useCart();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { item } = useParams();

  useEffect(() => {
    const correctItem = Data.find((i) => i._id === Number(item))
    setData(correctItem)
  }, []);





  // this doens't do anything because I couldn't get my backend to work on the internet
  // useEffect(() => {
  //   fetch(`https://api.jerichopetcare.com/items/${item}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setData(response);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);

  return (
    <div className="indvItemDisplay">
      <div className="square">
        <div className="padding">
          <div className="itemsCollum">
            <div className="indvItemName">{data.name}</div>
            <div className="descrip">{data.description}</div>
            <div className="row">
              {!data.isOnSale && <div className="price">{data.price}</div>}
              {data.isOnSale && <div className="oldPrice">{data.price}</div>}
              {data.isOnSale && (
                <div className="disPrice">
                  {Math.ceil(data.price * 0.8 * 100) / 100}
                </div>
              )}
              <div className="color">{data.color}</div>
            </div>
            <div className="row">
              <div className="price">{data.category}</div>
              <div className="color">{data.type}</div>
            </div>
            <button className="addToCart" onClick={() => addToCart(data._id)}>
              {/* minus one because data starts at 1, and is at an index of 0 */}
              Add To Cart
            </button>
          </div>

          <div className="onSale">
            {data.isOnSale && data.isInStock && (
              <img src="../sale-badge.png" width={50} />
            )}
          </div>
          <div className="InStock">
            {!data.isInStock && (
              <div className="inStockBadge">Out of Stock</div>
            )}
          </div>
        </div>
      </div>
      {/* <ItemsLikeThis catagory={data.catagory} type={data.type} /> */}
    </div>
  );
}
