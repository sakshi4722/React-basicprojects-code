import React from 'react'
import ComponentD from './ComponentD';

const ComponentC = (props) => {
  return (
    <div>
                <h1 className='m-4 p-4 border rounded'>helloC </h1>

        <ComponentD count={props.count} onIncrement={props.onIncrement} /></div>
  )
}

export default ComponentC