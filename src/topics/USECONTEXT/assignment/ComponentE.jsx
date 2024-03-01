import React from "react";
import { DataContext } from "./ComponentA";
import { useContext } from "react";
const ComponentE = (props) => {
  const dataContext = useContext(DataContext);

console.log(dataContext);

  return (
    <div className="m-4 p-4 border rounded">
      <h2>Component E</h2>
      <p>Count :{props.count}</p>
      <button onClick={props.onIncrement} className="mt-4 border rounded px-4 py-2 bg-green-500">
        Increment
      </button>
    </div>
  );
};

export default ComponentE;
