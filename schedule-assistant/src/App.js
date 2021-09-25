import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'
import {useState} from 'react'

const App = () => {
  const [showAddTask,setAddTasks] = useState(false);
  const [disableAddTask,setdisableAddTasks]= useState(false);
  const [tasks,setTasks] = useState( [
    {
        id: 1,
        text: "appointment",
        time: "00:05",
        start:false,
    },
    {
        id: 2,
        text: "doc appointment",
        time: "04:10",
        start:false,
    },
  ]);

const onDelete = (id) => {
  setTasks(tasks.filter((task) => (task.id !== id))) ;
}

const startTask = (id) => {
  setTasks(tasks.map((task) => (
    task.id === id ? {...task, start:!task.start} : task
  )))
  
}

const onAdd = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

  return (
    <div className="container">
      <Header onAdd={() => setAddTasks(!showAddTask)} showAdd={showAddTask} disableAdd={disableAddTask}/>
      <Tasks tasks={tasks} onDelete={onDelete} startTask={startTask} setdisable={setdisableAddTasks} disableAddTask={disableAddTask}/>
      {showAddTask && <AddTask onAdd={onAdd}/>}
    </div>
  )
}

export default App

