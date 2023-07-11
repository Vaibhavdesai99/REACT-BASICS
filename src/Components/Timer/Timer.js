import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0); // State variable to store the timer value
  const [start, setStart] = useState(false); // State variable to track whether the timer is running or not

  useEffect(() => {
    if (start) {
      // If the timer is running, create a timeout to increment the timer value by 1 after 1 second (1000ms)
      const id = setTimeout(() => {
        setTimer((prev) => prev + 1); // Increment the timer value
      }, 1000);

      // Clean up the timeout when the component unmounts or when the start state changes
      return () => clearTimeout(id);
    }
  }, [start, timer]); // Dependency array includes start and timer variables

  // Start handler
  const startHandler = () => {
    setStart((prev) => !prev); // Toggle the start state to start or stop the timer
  };

  // Reset handler
  const resetHandler = () => {
    setTimer(0); // Reset the timer value to 0
  };

  return (
    <>
      <label>Timer </label>
      <div>{timer}</div>
      <button onClick={startHandler}>{start ? "Stop" : "Start"}</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};

export default Timer;
