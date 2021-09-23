import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import {useState} from 'react'

const App = () => {
  

  const [tasks,setTasks] = useState( [
    {
        id: 1,
        text: "appointment",
        time: "0:0:5",
        start:false,
    },
    {
        id: 2,
        text: "doc appointment",
        time: "0:4:10",
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

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={onDelete} startTask={startTask}/>
    </div>
  )
}

export default App

