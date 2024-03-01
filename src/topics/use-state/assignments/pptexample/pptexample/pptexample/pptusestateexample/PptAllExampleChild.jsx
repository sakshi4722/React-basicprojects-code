import React from 'react'

const PptAllExampleChild = (props) => {
    const {title, count,setCount} = props
   const handleIncriment = ()=>{
     setCount(count+1)
    } 
    
    return (
    <div>
      <p>{title}</p>
      <h1>{count} </h1>
<button onClick={handleIncriment}>increment</button>
    </div>
  )
}
export default PptAllExampleChild