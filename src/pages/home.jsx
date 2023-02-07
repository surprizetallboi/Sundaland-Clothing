import React, { useState, useEffect } from "react";
import Viewport from "../comp/viewport";
import Banner from "../comp/banner";
import { Spinner } from "grommet";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://99.140.253.135:3455/items/")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch(setError);
  }, []);
  console.log(data);

//
const [test, setTest] = useState([])
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
      .then((result) => result.json())
      .then(
        (result) => {
          console.log(result);
          setTest(result)
      })
      .catch(setError);
  }, []);
//

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
