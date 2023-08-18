import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Component uppdating  Phase
    console.log("Component Updating");

    return () => console.log("component Unmount");
  }, [count]);
  return (
    <>
      <div> Lifecycle Methods</div>
      <div>Show Counter : {count} </div>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </>
  );
};

export default App;
