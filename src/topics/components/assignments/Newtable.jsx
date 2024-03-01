import "./newtable.css";

function Newtable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return(

            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
          )
          
        })}
      </tbody>
    </table>
  );
}

export default Newtable;
