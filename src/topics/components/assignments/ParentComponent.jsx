import React, { useState } from 'react';

// function Input(props) {
//   return (
//     <label>
//       {props.label}:
//       <input 
//         type={props.type} 
//         name={props.name} 
//         value={props.value}
//         onChange={props.onChange} 
//       />
//     </label>
//   );
// }

// function ParentComponent() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log (event.target.value)
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form data submitted:", formData);
//     // Send formData to your desired function or API endpoint here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input 
//         label="Name"
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//       />
//       <br />
//       <Input 
//         label="Email"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
//

const Input = (props) => {
return(
<>
{props.lable}
<input type={props.type}
onChange={props.onChange}
value={props.value}
name={props.name}
autoComplete='off'
/>
</>
)


}
const ParentComponent = () => {
const [formData,setFormData] = useState({
  name:'',
  email:''
})

const handleInputChange = (event) => {
  const {name, value} = event.target
setFormData({
  ...formData,
  [name]:value,
})

}
const handleSubmit = (event) => {
event.preventDefault()
console.log('form Data', formData);
}

  return (
    <form onSubmit={handleSubmit} >
<Input
lable = 'name'
type='text'
name='name'
value={formData.name}
onChange={handleInputChange}
/>
<br />
<br />

<Input
name='email'
lable='email'
type='email'
value={formData.email}
onChange={handleInputChange}

/>

<br />
<br />

<button type='submit'>submit</button>
    </form>
  )
}






























export default ParentComponent;