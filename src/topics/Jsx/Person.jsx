import React from 'react'

const Person = (props) => {
    console.log(props);
    console.log(props.data);
    console.log(props.title)
const  data= props.data
  return (
    <div>
<table>
<thead>
<tr>
    <th>name</th>
    <th>age</th>

</tr>
</thead>
<tbody>
    
{
data.map((item,index)=>{
//    console.log(item.name); 
return (
<tr>
<td>
    {item.name}
</td>
<td>
    {item.age}
</td>
</tr>
)
})

}

</tbody>



</table>




    </div>
  )
}

export default Person
// 