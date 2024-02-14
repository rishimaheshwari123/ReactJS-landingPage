import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

function Timer() {
  const [time, setTime] = useState(600); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setTime(600);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="Total_Timer">
      <div className="Timer_Text">
        <h1>Time is running out.</h1>
        <h1>Grab your spot fast!</h1>
      </div>
      <div className="Total_countdown">
        <div className="Countdown">
          <div className="Countdown_Component">
            <h1>00</h1>
            <small>Hours</small>
          </div>
          <h1>:</h1>
        </div>
        <div className="Countdown">
          <div className="Countdown_Component">
            <h1>{minutes < 10 ? `0${minutes}` : minutes}</h1>
            <small>Minutes</small>
          </div>
          <h1>:</h1>
        </div>
        <div className="Countdown">
          <div className="Countdown_Component">
            <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
            <small>Seconds</small>
          </div>
        </div>
      </div>
      <Button title={'Register Now at ₹ 499 '} />
    </div>
  );
}

export default Timer;
