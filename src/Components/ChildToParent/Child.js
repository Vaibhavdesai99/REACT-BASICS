import React from "react";

const Child = (props) => {
  console.log(props);
  return (
    <>
      <div>Child2</div>
      <button onClick={() => props.updateName("parent2")}>Click Me</button>
    </>
  );
};

export default Child;
