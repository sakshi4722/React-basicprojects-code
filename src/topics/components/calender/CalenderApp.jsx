import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalenderApp = () => {
    const [value, setValue] = useState(new Date());
    const [selectData, setSelectDate]= useState (new Date());

    const onChange = () =>{
        setValue(new Date().getDay());
    }

   return (
    <div className='flex justify-center items-center'>
        <Calendar
    value={value}
    onChange={onChange}
    />
    </div>
  )
}

export default CalenderApp