import React, { useReducer } from 'react'

const initialState = {
    Name: '',
    Email: '',
    Password: ''
};

function reducer(state, action) {
    return{
        ...state,
        [action.field]:action.value
    }
}
const Formreducer = () => {
const [state, dispatch] = useReducer(reducer, initialState);
const handleChange = (event) =>{
dispatch({ field:event.target.name, value:event.target.value});
}

  return (
    <div>
<form action="">
<label htmlFor="">Name:</label>
<input type="text"
name='name'
value={state.name}
onChange={handleChange}
/>
<label htmlFor="">Email:</label>
<input type="email"
name='email'
value={state.email}
onChange={handleChange}
/>
<label htmlFor="">Password:</label>
<input type="password" 
name='password'
value={state.password}
onChange={handleChange}
/>
</form>
</div>
  )
}

export default Formreducer