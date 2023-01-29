import React, { useState, useEffect } from "react";

export default function itemsLikeThis(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   async function fetchData() {
  //     const cartMap = data.map(async (item) => {
  //       const response = await fetch(`http://localhost:3000/categories/${props.catagory}?type=${props.type}`);
  //       const json = await response.json();
  //       return json;
  //     });
  //     const thingy = await Promise.all(cartMap);
  //     setData(thingy);
  //   }
  //   fetchData();
  // }, [cart]);


  useEffect(() => {
    fetch(`http://localhost:3000/categories/${props.catagory}?type=${props.type}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);




  return <div>itemsLikeThis</div>;
}
