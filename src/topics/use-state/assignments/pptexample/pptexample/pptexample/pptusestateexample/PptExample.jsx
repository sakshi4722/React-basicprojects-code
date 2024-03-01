import React from "react";
import { useState } from "react";
const PptExample = () => {
  const Buttonfirst = () => {
    const [IsOn, setISOn] = useState(false);
    const handleClick = () => {
      setISOn(!IsOn);
    };

    return (
      <button
        className="p-3 m-10 border font-bold"
        style={{ backgroundColor: IsOn ? "green" : "red" }}
        onClick={handleClick}
      >
        {IsOn ? "ON" : "OFF"}
      </button>
    );
  };

  const List = () => {
    const [items, setItems] = useState(["Apples", "Oranges", "Bananas"]);
    const handleAddItem = () => {
      setItems([...items, "Grapes", "papaya"]);
    };
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    );
  };

  const Form = () => {
    const [change, setChange] = useState();
    const handleOnChange = (event) => {
      setChange(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(change);
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          onChange={handleOnChange}
          value={change}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    );
  };

  const Number = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };
    return (
      <div className="m-20">
        <p>count: {count}</p>
        <button className="border m-10 p-2" onClick={handleIncrement}>
          Increment
        </button>
        <button className="border m-10 p-2" onClick={handleDecrement}>
          Decrement{" "}
        </button>
      </div>
    );
  };

  const Forminput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          there is two button
          <input type="text" onChange={handleOnChange} />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  };
  const itemList = [
    { id: 1, text: "Walk the dog", completed: false },
    { id: 2, text: "Buy groceries", completed: false},
    { id: 3, text: "Do laundry", completed: false },
  ];
  const TodoList = () => {

    const [todo, setTodo] = useState(itemList);
    const [add, setAdd] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const handleOnChange = (event) => {
      setAdd(event.target.value);
    };
    const completeChange = (id) =>{
      const newTodos = todo.map((item) => {
if (item.id===id) {
  return({...item, completed: !item.completed })
}else return item
})
setTodo(newTodos)
    }
    // const handleDeleteTodo = (id) => {
    //   const newTodos = todo.filter((todo) => todo.id !== id);
    //   setTodos(newTodos);
    //   };
    const handleDeleteTodo = () => {
      const newtodo = todo.slice(1)
      setTodo(newtodo)
    }

    const handleOnClick = () => {
      setTodo([...todo, {
        id: Math.floor(Math.random() * 100),
        text: add,
        completed: true,
      }]);
    };
    return (
      <div className="m-10 border p-10">
        <div>
          <input
            value={add}
            onChange={handleOnChange}
            className="border bg-gray-100"
            type="text"
          />
          <button className="m-2 bg-gray-300 p-2 rounded font-semibold" onClick={handleOnClick}>AddItems</button>
        </div>
        
        <ul className="mt-5">
          {todo?.map((item) => {
            return (
              <div className="flex gap-4">
                 <input onChange={()=>completeChange(item.id)} type="checkbox" 
              value={isChecked}
              />
                <li key={item.id} style={{textDecoration:item.completed ? "line-through": ''}}>
                {item.text}
              </li>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
              
            );
          })}
        </ul>
        
      </div>
    );
  };

  function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
    setIsChecked(!isChecked);
    };
    return (
    <label className="checkbox">
    <input
    type="checkbox"
    checked={isChecked}
    onChange={handleToggle}
    />
    <span className="checkmark"></span>
    Checkbox Label
    </label>
    );
   }


  return (
    <div>
      {/* <Buttonfirst />
      <List />
      <Form />
      <Number />
      <Form />
      <Forminput /> */}
      <TodoList />
      {/* <Checkbox/> */}
    </div>
  );
};

export default PptExample;
