import React from 'react'
import ComponentB from './ComponentB';
import  { useState } from 'react';
 export const DataContext = React.createContext();
const ComponentA = () => {
    const [count, setCount] = useState(0)
    const onIncrement = () =>{
      setCount(count+1);
    }
  return (
    <DataContext.Provider value={{count, onIncrement}}> 
    <div>
        <h1 className='m-4 p-4 border rounded'> HELLOA</h1>
        <ComponentB count={count} onIncrement={onIncrement}/>
    </div>
    </DataContext.Provider>
  )
}

export default ComponentA