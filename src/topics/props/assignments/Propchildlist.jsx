import React from 'react'

const Propchildlist = (props) => {
  const{data}=props
  return (
    <div>
      {/* <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.discription}</p>
        <p>{props.price}</p> */}
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.discription}</p>
        <p>{data.price}</p>
        </div>
  )
}

export default Propchildlist