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
        time: "3 hours",
        reminder:true,
    },
    {
        id: 2,
        text: "doc appointment",
        time: "3 hours",
        reminder:false,
    },
  ]);

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App

