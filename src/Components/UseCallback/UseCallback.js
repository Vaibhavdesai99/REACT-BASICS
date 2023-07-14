import React, { useState } from "react";

const useCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    console.log("counter");
  };

  const ButtonClicked = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={ButtonClicked}>CLICK ME </button>
    </div>
  );
};

export default useCallback;
