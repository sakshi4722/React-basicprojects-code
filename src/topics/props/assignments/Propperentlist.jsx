import React from 'react'
import Propchildlist from './Propchildlist';

const product= [
  {id:1, name:'shoes',discription:'this is sports shoes', price:1000},
  {id:2, name:'bag',discription:'this is stylish bag', price:2000},
  {id:3, name:'shirt',discription:'this is cool shirt', price:500},
  {id:4, name:'jenc',discription:'this is denim jenc', price:2000},
]
const Propperentlist = () => {
 const getitems = () => {
const arr = []
for (let i=0; i<product.length; i++){
  arr.push(<Propchildlist data={product[i]}/>)
}
return arr
 }
  return (
    <div>
{getitems()}
{/* {product ? (
          product.map((list) => {
            return <Propchildlist key={list.id} name={list.name}  discription={list.discription} price={list.price}/>;
          })
        ) : (
          <p>Loading...</p>
        )} */}
</div>
  )
}

export default Propperentlist