import React from 'react'
import Pbar from './pbar'
import { useState } from 'react'
import { useEffect } from 'react';

const Parperent = () => {
const [progress, setProgress] = useState(0);
 

useEffect(() => {
const interval = setInterval (() => {
setProgress ((prevprogress) => prevprogress >= 100 ? 0: prevprogress+10);
},1000);
return () => clearInterval(interval);
},[])

return (
    <div className='m-4 text-2xl font-bold'> 
<Pbar value={progress} max={100}/>
    </div>
  )
}

export default Parperent