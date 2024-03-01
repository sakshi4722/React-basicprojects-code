import React from 'react'
import { useState } from 'react'
import PptAllExampleChild from '../../use-state/assignments/pptexample/pptexample/pptexample/pptusestateexample/PptAllExampleChild'

const PptAllExample = () => {
    const [count, setCount] = useState(0)




  return (
    <div>
       <PptAllExampleChild title={"count"} count={count}  setCount={setCount}/> 
    </div>
  )
}

export default PptAllExample