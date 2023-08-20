// Counter example

import React, { useState } from "react";

const Counter = () => {
  const [count, setCout] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCout((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCout((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
