import React from 'react'
import { useState } from 'react'
import PropChild from './PropChild'

const Propperent = () => {
const [data, setData] = useState('hello')
const handleData = (newdata) =>{
    setData(newdata)
}
  return (
    <div>
<PropChild  data={data}  ondataupdate={handleData}     />
<p>Data: {data}</p>
    </div>
  )
}

export default Propperent