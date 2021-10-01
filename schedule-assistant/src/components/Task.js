import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Countdown from 'react-countdown';
import {useRef} from 'react'

const Task = ({task,onDelete,startTask,setdisable,disableAddTask}) => {
    const clockref = useRef()
    const startTimer = () => {
        setdisable(!disableAddTask) 
        startTask(task.id)
    }

    // Renderer callback with condition
    const renderer = ({minutes, seconds,completed }) => {
        if (completed) {
            // Render a completed state
            return null
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };
    const timerOnComplete = () => {
        onDelete(task.id)
        setdisable(!disableAddTask) 
            
    }

    const convertTime = (time) => {
        let hour = parseInt(time)*1000*60
        time = hour
        return time;
    }

    let timer = <Countdown
    date={Date.now() + convertTime(task.time)}
    renderer={renderer}
    onComplete={timerOnComplete} ref = {clockref}/>



    return (
        <div className={`task  ${task.start ? "start" : ''}`} onDoubleClick={() => startTimer()} >

            <h3>
                {task.text}
                <FaTimes style={{color:
                'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/> 
                {/* //state gets passed down and "actions gets passed up */}
            </h3>
            {task.start ? timer : <p>Scheduled time: {task.time + " mins"}</p>}

        </div>
    )
}

export default Task
