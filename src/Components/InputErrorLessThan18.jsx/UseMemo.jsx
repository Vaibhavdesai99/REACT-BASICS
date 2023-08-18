/*Specifically, in development mode, React may perform double-rendering in certain scenarios to detect any side effects or unintended component behavior. One of these scenarios is when using the useMemo hook. The first render is for normal component rendering, and the second render is to double-check if the memoized value matches the value obtained from the first render. If they don't match, React will raise a warning to alert you that something might be wrong with your useMemo usage */

import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("Expensive opeartion");

    return count * 2;
  }, [count]);

  const checkingUseMemo = () => {
    console.log(count);
    console.log("clicking on check the memo button");
    setCount(count);
  };
  return (
    <>
      <div>Use Memo</div>
      <div>Show Counter : {count} </div>
      <div>Memoized Value : {memoizedValue}</div>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <button onClick={checkingUseMemo}>Check The Memo </button>
    </>
  );
};

export default App;
