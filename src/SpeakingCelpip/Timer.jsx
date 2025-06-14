import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTime]);

  return (
    <div className="timer">
      <p>Preparation Time</p>
      <p>{time}</p>
    </div>
  );
};

export default Timer;
