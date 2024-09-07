import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  // State to hold the initial input time and countdown time
  const [time, setTime] = useState(60)
  const [countDown, setCountdown] = useState(time)
  const [isRunning, setIsRunning] = useState(false)


  
  // useEffect to handle the countdown logic
  useEffect(() => {

    let timer;
    if (isRunning && countDown > 0){
      timer = setInterval(() => {
        setCountdown((prevCountDown) => prevCountDown - 1)
      }, 1000)
    } 
    else if (countDown == 0){
      alert("Time's up!")
      setIsRunning(false)
    }
    
    // cleanup interval on component unmount or when countdown stops
    return () => clearInterval(timer) // cleanup function runs only when we leave the current component.
      
  }, [isRunning, countDown])

  const startTimer = () => {
    if (time > 0 ){
      setCountdown(time)
      setIsRunning(true)
    }
  }
  const stopTimer = () => {
      setIsRunning(false)
  }
  const resetTimer = () => {
      setIsRunning(false)
      setCountdown(time)
  }
  


  return (
    <div style={{textAlign: "center", padding: "50px"}}>
      <h1>Countdown Timer</h1>

      <div>
        <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} disabled={isRunning}/>
      </div>

      <h2>{countDown} seconds</h2>

      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>

    </div>
  );
}

export default App;
