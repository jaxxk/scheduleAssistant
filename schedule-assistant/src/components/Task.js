import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Countdown from 'react-countdown';
import {useRef} from 'react'
import useSound from 'use-sound';
import boopSfx from '../sounds/music.mp3';

const Task = ({task,onDelete,startTask,setdisable,disableAddTask,pause,setPause,finish,setFinish}) => {
    const clockRef = useRef();
    const volume = .5;
    const [play,{stop}] = useSound(boopSfx,volume);
    
    const startTimer = () => {
        setdisable(!disableAddTask) 
        startTask(task.id)
    }

    // Renderer callback with condition
    const renderer = ({minutes, seconds,completed,api}) => {
        if (completed) {
            // Render a completed state
            return null
        }else if (api.isPaused() === true && pause === true){
            return <span>Paused</span>
        }
        else if(pause === true && api.isPaused() === false){
            api.pause()
            task.time = convertTime2({minutes},{seconds})
            return <span>{minutes}:{seconds}</span>
        }else if(pause === false && api.isPaused() === true){
            api.start()
            return <span>{minutes}:{seconds}</span>
        }
        else {
          // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };


    const timerOnComplete = () => {
        play();
        taskFinish();
    }

    async function taskFinish(){
        let myResponse = new Promise(function(resolve, reject){
            let check = window.confirm("Task complete");
            setTimeout(function(){
                if(check)resolve("complete"); 
            },3000)
        }) 

        let check2 = await myResponse;
        if(check2 === "complete"){
            stop();
            onDelete(task.id);
            setdisable(!disableAddTask); 
        }
    }

    const convertTime2 = (obj1,obj2) => {
        let minutes = obj1.minutes;
        let seconds = obj2.seconds;
        if(seconds >= 50){
            return  minutes+1
        }else{
            return minutes+0.5
        }
    }

    const convertTime = (time) => {
        let hour = parseInt(time)*1000*60
        time = hour
        return time;
    }


    return (
        <div className={`task  ${task.start ? "start" : ''}`} onDoubleClick={() => startTimer()} >
            
            <h3>
                {task.text}
                <FaTimes style={{color:
                'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/> 
                {/* //state gets passed down and "actions gets passed up */}
            </h3>
            {task.start ? 
                <Countdown
                date={Date.now() + convertTime(task.time)}
                renderer={renderer}
                onComplete={timerOnComplete} key={task.id} ref={clockRef}/> : <p>Scheduled time: {task.time + " mins"}</p>}
        </div>
    )
}

export default Task
