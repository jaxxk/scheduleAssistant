import React from 'react'
import Task from './Task'
import Button from './Button'
const Tasks = ({tasks,onDelete,startTask,setdisable,disableAddTask,pause,setPause,finish,setFinish}) => {
   return (
      <div>
         <div className={disableAddTask ? "freeze" : ''}>
            {tasks.map((task) => (
               <Task key={task.id} task={task} onDelete={onDelete} startTask={startTask} setdisable={setdisable} disableAddTask={disableAddTask}
               pause={pause} setPause={setPause} finish={finish} setFinish={setFinish}/>
            ))} 
         </div>
         <Button text={"Pause"} onClick={() => setPause(true)}/>
      </div>
   )
}

export default Tasks
