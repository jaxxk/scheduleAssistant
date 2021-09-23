import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,startTask}) => {
   return (
      <>
         {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} startTask={startTask} />
         ))} 
      </>
   )
}

export default Tasks
