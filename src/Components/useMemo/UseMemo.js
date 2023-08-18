import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("rensering...");
  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  const incrementvalue = () => {
    setCount(count + 1);
  };

  const checkMemo = () => {
    console.log("same count value componet wont re-render");
  };
  return (
    <div>
      counter : -{count}
      memoised value :-{memoizedValue}
      <button onClick={incrementvalue}>Increment</button>
      <button onClick={checkMemo}>CheckState</button>
    </div>
  );
};

export default App;
