import React from "react";
import "./colorpicker.css";
import { useState } from "react";
const Colorpicker = () => {
  const [selectedColor, setSelectedColor] = useState();
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <div className="color" style={{ backgroundColor: selectedColor }}></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default Colorpicker;
