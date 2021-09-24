import React from 'react'
import {useState} from 'react'
import TimeInput from 'react-time-picker-input'
const AddTask = ({onAdd}) => {
   const [text,setText] = useState('')
   const [time,setTime] = useState('')
   const [start,setstart] = useState(false)
   
   const onSubmit = (e) => {
      e.preventDefault()

      if(!text){
         alert('Please add text')
         return
      }
      if(time === "00:00"){
         alert('Please add time')
         return
      }

      onAdd({text,time,start,setstart})
      setText('')
      setTime('')
      setstart(false)
   }
   
   return (
      <form className="add-form" onSubmit={onSubmit}>
         <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} onChange={(e) => setText(e.target.value)} />            
         </div>
         
         <div className="form-control">
            {/* <label>Time</label>
            <input type="text" placeholder="Add Date and Time"
             value={time} onChange={(e) => setTime(e.target.value)}/>             */}
            <TimeInput
                eachInputDropdown onChange={(newValue)=>setTime(newValue)}
                value={time}
            />
         </div>


         <input type="submit" value='Save Task' className='btn btn-block'></input>
      </form>
   )
}

export default AddTask
