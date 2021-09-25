import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,startTask,setdisable,disableAddTask}) => {
   return (
      <>
         {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} startTask={startTask} setdisable={setdisable} disableAddTask={disableAddTask}/>
         ))} 
      </>
   )
}

export default Tasks
