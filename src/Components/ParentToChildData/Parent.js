import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Vibe");
  return (
    <>
      <div className="Parent">I am Parent</div>
      <Child name={name} setName={setName} />
    </>
  );
};

export default Parent;
