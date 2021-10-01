import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,startTask,setdisable,disableAddTask}) => {
   return (
      <div>
         <div className={disableAddTask ? "freeze" : ''}>
            {tasks.map((task) => (
               <Task key={task.id} task={task} onDelete={onDelete} startTask={startTask} setdisable={setdisable} disableAddTask={disableAddTask}/>
            ))} 
         </div>
      </div>
   )
}

export default Tasks
