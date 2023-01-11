import React, { useState, useEffect } from "react";
import "./banner.css";

let interval;

export default function Banner(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    interval = setInterval(() => {
      if (count <= props.content.length - 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
      // console.log("is this running");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // function addCountAtInterval() {
  //   if (count <= props.content.length - 2) {
  //     setCount(count + 1);
  //   } else {
  //     setCount(0);
  //   }
  // }

  function addCount() {
    if (count <= props.content.length - 2) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
    clearInterval(interval);
  }

  function minCount() {
    if (count === 0) {
      setCount(4);
    } else {
      setCount(count - 1);
    }
    clearInterval(interval);
  }

  return (
    <div className="banner">
      <div className="square">
        <div className="banItems">
          <div className="banName">{props.content[count].name}</div>
          <div className="banPrice">${props.content[count].price}</div>
          <div className="banDescrip">{props.content[count].description}</div>
        </div>
        <div className="countWrapper">
            <div className="minCount count" onClick={minCount}>
              -
            </div>
            <div className="space" />
            <div className="addCount count" onClick={addCount}>
              +
            </div>
          </div>
      </div>
    </div>
  );
}
