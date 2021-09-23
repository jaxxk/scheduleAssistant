import React from 'react'
import {useState} from 'react'
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
            <label>Time</label>
            <input type="text" placeholder="Add Date and Time"
             value={time} onChange={(e) => setTime(e.target.value)}/>            
         </div>
         
         <input type="submit" value='Save Task' className='btn btn-block'></input>
      </form>
   )
}

export default AddTask
