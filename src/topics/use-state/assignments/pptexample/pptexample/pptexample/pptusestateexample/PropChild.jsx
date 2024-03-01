import React from 'react'
import { useState } from 'react'

const PropChild = (props) => {
    const {data, ondataupdate} = props
    const [childData , setDataChild] = useState('hy')
  const  handleChildDataChange = (newchilddata) =>{
setDataChild(newchilddata)
ondataupdate(newchilddata)
    }
  return (
    <div>
        <input className='border bg-blue-300 ' type="text" value={childData} onChange={(e) => handleChildDataChange(e.target.value)} />
    
    </div>
  )
}

export default PropChild