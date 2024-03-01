import React from "react";
import { useReducer } from "react";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  console.log("state: ", state);
  console.log("action: ", action);

  switch (action.type) {
    case "Increment":
      return { count: state.count + 1};

    case "Decrement":
      return { count: state.count - 1 };

    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onIncrement = () => {
    console.log("On Increment Clicked!");
    dispatch({ type: "Increment" });
  };
  const onDecremnt = () => {
    console.log("on Decrement Clicked!");
    dispatch({ type: "Decrement" });
  };
  const onReset = () => {
    console.log("on Reset Clicked!");
    dispatch({ type: "Reset",});
  };

  return (
    <div className="m-4 p-4 border rounded">
      <h1 className="m-4">count: {state.count} </h1>
      <button
        onClick={onIncrement}
        className="m-4 border rounded px-4 py-2 bg-green-500"
      >
        increment
      </button>
      <button
        onClick={onDecremnt}
        className="m-4 border rounded px-4 py-2 bg-green-500"
      >
        decrement
      </button>
      <button
        onClick={onReset}
        className="m-4 border rounded px-4 py-2 bg-green-500"
      >
        reset
      </button>
    </div>
  );
};

export default ReducerCounter;
