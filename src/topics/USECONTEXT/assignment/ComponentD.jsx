import React from 'react'
import ComponentE from './ComponentE'
const ComponentD = (props) => {
  return (
    <div>
                <h1 className='m-4 p-4 border rounded'>helloD</h1>

        <ComponentE count={props.count} onIncrement={props.onIncrement} /></div>
  )
}

export default ComponentD