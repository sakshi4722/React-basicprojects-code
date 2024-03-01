import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Fetchpractice = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect");

    const getDataPromise = fetch("https://jsonplaceholder.typicode.com/posts");

    console.log("getDataPromise", getDataPromise);

    getDataPromise
      .then((Response) => {
        console.log("Response", Response);
        return Response.json();
      })
      .then((data) => {
        console.log("data", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        
      });
  }, []);

  return (
    <div>
      <h1>Fetchpractice</h1>
      {
        loading ? <p>data is loading.....</p> : <pre>{JSON.stringify(data, null,2)}</pre>

      }
    </div>
  );
};

export default Fetchpractice;
