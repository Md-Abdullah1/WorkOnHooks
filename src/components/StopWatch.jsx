import React, { useEffect, useRef, useState } from 'react'

const format = (time)=>{
    // let msecs = 0;
    let secs = Math.floor(time / 60 / 60 % 24);
    let mins = Math.floor(time / 60 % 60 );
    let hrs = Math.floor(time % 60 );


     secs = secs < 10 ? `0${secs}`:secs ;
    mins = mins < 10 ? `0${mins}`:mins ;
     hrs = hrs < 10 ? `0${hrs}`:hrs;

     return hrs +  ':' + mins + ':' + secs
}



const StopWatch = () => {

    const [time,setTime] = useState();
    const [running, setRunning] = useState(null)
    const timer = useRef();

    useEffect(()=>{
        if(running){
            timer.current = setInterval(()=>{
                setTime(val => val + 1)
            },100)
        }
        return ()=> clearInterval(timer.current)
    },[running])
  return (
    <div className="w-full flex flex-col justify-center items-center h-[100vh] gap-5">
    <h1 className="text-2xl text-purple-700 font-bold">
     Stop Watch using React
    </h1>
    <div className="flex flex-col p-2 justify-center items-center border-2 w-fit border-purple-300">
      <h3 className="text-xl font-bold p-2 text-purple-300">{format(time) }</h3>
      <div className="flex gap-2 ">
        <button
          type="button"
          className="btn text-purple-200 p-2 text-lg rounded-md  bg-purple-700"
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          type="button"
          className="btn text-purple-200 p-2 text-lg rounded-md bg-purple-700"
          onClick={() =>{ setTime(0)
        setRunning(false)}}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn text-purple-200 p-2 text-lg rounded-md bg-purple-700"
          onClick={() =>{
        // if(running){
        //     clearInterval(timer.current)
        //     setRunning(running)
        // }} 
        setRunning((prevRunning) => !prevRunning)}}
        >
         {running ? ' Stop' : 'Resume'}
        </button>
      </div>
    </div>
  </div>
  )
}

export default StopWatch