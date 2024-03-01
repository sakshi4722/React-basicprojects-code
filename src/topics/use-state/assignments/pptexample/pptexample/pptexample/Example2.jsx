import React from 'react'
import { useState } from 'react';

const List = () => {
    const [items, setItems] = useState(['Apples', 'Oranges', 'Bananas']);
 const handleAddItem = () => {
 setItems([...items, 'Grapes', 'papaya']);
 };
  return (
    <div>
 <ul>
 {items.map(item => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 <button onClick={handleAddItem}>Add Item</button>
 </div>
  );
}

export default Example2