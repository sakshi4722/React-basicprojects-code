import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  return (
    <div>
      <h1 className='m-4 p-4 border rounded'>HELLOB </h1>
      <ComponentC count={props.count} onIncrement={props.onIncrement} />
    </div>
  );
};

export default ComponentB;
