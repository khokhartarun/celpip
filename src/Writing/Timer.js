import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now() - seconds * 1000;
      }

      interval = setInterval(() => {
        setSeconds(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  const formattedTime = `${minutes}:${
    displaySeconds < 10 ? "0" : ""
  }${displaySeconds}`;

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsActive(false);
    startTimeRef.current = null;
  };

  return (
    <div>
      <section>
        <button onClick={handleRestart} className="btn hero-btn">
          Reset
        </button>
        Time Elapsed: {formattedTime}
        <button onClick={handleStartStop} className="btn hero-btn">
          {isActive ? "Stop" : "Start"}
        </button>
      </section>
    </div>
  );
};

export default Timer;
