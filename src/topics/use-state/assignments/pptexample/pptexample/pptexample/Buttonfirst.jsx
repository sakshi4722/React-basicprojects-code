import React from 'react'
import { useState } from 'react'
import "./buttonfirst.css"

const Buttonfirst = () => {
const [IsOn, setISOn] = useState(false)
const handleClick = () =>{
    setISOn(!IsOn);
};


  return (
    <button onClick={handleClick}>
         {IsOn ? "ON" : "OFF"}
    </button>
   
  )
}

export default Buttonfirst