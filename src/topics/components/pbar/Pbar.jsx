import React from "react";

const Pbar = ({ value, max }) => {
  const percentage = Math.floor((value / max) * 100);
  return (
    <div className="w-full bg-gray-300  h-5 flex flex-col justify-center m-5">
      <div
        className="bg-blue-900  h-5  rounded z-10"
        style={{ 'width': `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Pbar;
