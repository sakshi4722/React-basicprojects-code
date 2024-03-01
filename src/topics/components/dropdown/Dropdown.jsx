import React from 'react'
import { useState } from 'react'

const Dropdown = () => {
    const [select, setSelect] = useState(null)
 const  handleSelectValue  = (event) => {
const value = event.target.value
setSelect(value)
 }
  return (
    <div className='m-8 p-6 border bg-gray-200'>
<select className='font-semibold block mb-24 p-1' onChange={handleSelectValue} value={select}>
<option>select your state</option>
<option value="Rajesthan">rajesthan </option>
<option value="madhya pradesh">madhya pradesh</option>
<option value="uttar pradesh">uttar pradesh</option>
<option value="uttrakhand"> uttrakhand </option>
<option value="aasam">aasam</option>
</select>
<span className='p-3 bg-gray-400 border rounded font-bold'>your selected state : {select}</span>



    </div>
  )
}

export default Dropdown