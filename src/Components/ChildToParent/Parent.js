import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Parenttt");
  return (
    <>
      <div> i am {name}</div>
      <Child updateName={setName} />
    </>
  );
};

export default Parent;
