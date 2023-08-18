import React, { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      let id = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => clearTimeout(id);
    }
  }, [timer, start]);

  const startTimer = () => {
    setStart((prev) => !prev);
  };

  const reset = () => {
    setTimer(0);
  };
  return (
    <>
      Timer : {timer}
      <button onClick={startTimer}>{start ? "stop" : "start"} </button>
      <button onClick={reset}> RESET </button>
    </>
  );
};

export default App;
