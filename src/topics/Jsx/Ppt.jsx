import React from "react";
import Person from "./Person";
function Ppt() {
  {
    /* Example 1 - Simple JSX element: */
  }
  const element = <h1>Hello, world!</h1>;
  {
    /* Example 2 - Using variables in JSX: */
  }
  const name = "rahul";
  const elements = <h1>Hello, {name}!</h1>;
  // console.log(elements);
  // // Example 3 - Rendering a list using map():
  // const numbers = [1, 2, 3, 4, 5];
  // // const listItems = numbers.map((number) =>
  // //  <li>{number}</li>
  // // );
  // // const element1 = <ul>{listItems}</ul>;

  //   return (
  //     <ul>
  //      {/* {element1} */}
  //      {
  // numbers.map((value,index)=>{
  //  return (
  //     <li key={index}>{value}</li>
  //  )
  // })
  // }
  //     </ul>
  //   );

  // // Example 4 - Using ternary operator in JSX:
  const isLoggedIn = false;
  const element2 = (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}</div>
  );
  // // Example 5 - Using spread attributes to pass props:
  const people = [
    { name: "rahul", age: 22 },
    { name: "ayushi", age: 23 },
  ];
  // const element3 = <Person {...props} />;
  // // Example 6 - Using className instead of class in JSX:
  // const element4 = <div className="container"></div>;
  // Example 7 - Using inline styles in JSX:
  const style = {
    color: "red",
    fontSize: "20px",
  };
  // const element4 = <div style={style}></div>;
  // Example 8 - Using event handlers in JSX:
  function handleClick() {
    console.log("Button clicked");
  }
  const element5 = <button onClick={handleClick}>Click me</button>;
  // Example 9 - Using JSX in if statements:
  function Greeting(props) {
    if (props.isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  }
  //   Example 10 - Using JSX in for loops:
  function List(props) {
    const items = [];
    for (let i = 0; i < props.item.length; i++) {
      items.push(<li>{props.item[i]}</li>);
    }
    return <ul>{items}</ul>;
  }
  //   Example 11 - Using JSX in switch statements: //
  function getMessage(type) {
    switch (type) {
      case "success":
        return <div className="alert alert-success">Success!</div>;
      case "error":
        return <div className="alert alert-danger">Error!</div>;
      default:
        return null;
    }
  }
  // //   Example 14 - Rendering a list of items with conditional rendering:
  // function ListItem(props) {
  //  return <li>{props.value}</li>;
  // }
  // function NumberList(props) {
  //  const numbers = props.numbers; //[1, 2, 3, 4, 5]
  //  const listItems = numbers.map((number) => (
  //  <ListItem key={number.toString()} value={number} />
  //  ));
  //  return <ul>{listItems}</ul>;
  // }
  // function App() {
  //  const numbers = [1, 2, 3, 4, 5]; //fun con [1] re <list>
  //  return (
  //  <div>
  //  <h1>Number List</h1>
  //  <NumberList numbers={numbers} />
  //  </div>
  //  );
  // }

  // Example 15 - Rendering a table with dynamic data:
  // function ProductTable(props) {
  //   const products = props.products;
  //   const rows = [];
  //   let lastCategory = null;
  //   products.forEach((product) => {
  //     if (product.category !== lastCategory) {
  //       rows.push(
  //         <tr key={product.category}>
  //           <th colSpan="2">{product.category}</th>
  //         </tr>
  //       );
  //     }
  //     rows.push(
  //       <tr key={product.name}>
  //         <td>{product.name}</td>
  //         <td>{product.price}</td>
  //       </tr>
  //     );
  //     lastCategory = product.category;
  //   });
  //   return (
  //    <center>
  //      <table>
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Price</th>
  //         </tr>
  //       </thead>
  //       <tbody>{rows}</tbody>
  //     </table>
  //    </center>
  //   );
  // }
  // const PRODUCTS = [
  //   { category: "Sporting Goods", price: "$49.99", name: "Football" },
  //   { category: "Sporting Goods", price: "$9.99", name: "Baseball" },
  //   { category: "Electronics", price: "$99.99", name: "iPod Touch" },
  //   { category: "Electronics", price: "$399.99", name: "No name" },
  // ];
  // function Button(props) {
  //   const buttonClass = props.isPrimary ? 'primary' : 'secondary';
  //   return <button className={buttonClass}>{props.label}</button>;
  //  }
  // function Notification(props) {
  //   return (
  //   <div>
  //   {props.hasMessage && <p>{props.message}</p>}
  //   {!props.hasMessage && <p>No new notifications.</p>}
  //   </div>
  //   );
  //  }
  // Example 20 - Using JSX with arrays:
  function List({items}) {
    const newitems = items.map((item) => <li key={item}>{item}</li>);
    return <ul>{newitems}</ul>;
  }
  const numbers = [1, 2, 3, 4, 5];
  // <List items={numbers} />;
  return (
    <List
    items={numbers} 
    />
    //   <div><Button
    //   isPrimary = {false}
    //   label = 'clickme!'
    //   /></div>
    //   //     <div>
    // Example 18 - Using JSX with inline conditionals:

    //         {/* {element3} */}
    //         {/* <Person {...props} /> */}
    //         {/* <Person data={people}  title='student'/> */}
    // <element4/>
    //     </div>
    /* <div style={style}>
    <p>hello</p>
</div>  */

    /* <div>
  {App()}  
</div> */

    //     <div> {List(
    // {
    //  item: [1,2,3,4,5]

    // }

    //     )}</div>
  );
}

export default Ppt;
