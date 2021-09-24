import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Countdown from 'react-countdown';

const Task = ({task,onDelete,startTask}) => {
    

    const startTimer = () => {
        startTask(task.id)
    }

    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return null
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };

    const convertTime = (time) => {
        let hour = parseInt(time.slice(0,2))*1000*60
        let minute = parseInt(time.slice(4,6))*1000
        time = hour + minute
        return time;
    }
    
    return (
        <div className={`task  ${task.start ? "start" : ''}`} onDoubleClick={() => startTimer()}>
            <h3>
                {task.text}
                <FaTimes style={{color:
                'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/> 
                {/* //state gets passed down and "actions gets passed up */}
            </h3>
            {task.start ? <Countdown
            date={Date.now() + convertTime(task.time)}
            renderer={renderer}
            onComplete={() => onDelete(task.id)}/> : <p>Scheduled time: {task.time}</p>}

        </div>
    )
}

export default Task
