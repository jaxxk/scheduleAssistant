import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete}) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <FaTimes style={{color:
                'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/> 
                {/* //state gets passed down and "actions gets passed up */}
            </h3>
            <p>{task.time}</p>

        </div>
    )
}

export default Task
