import React, { useState } from "react";

const Alphabate = () => {
  const [input, setInput] = useState("");

  const inputfield = (e) => {
    const inputValue = e.target.value;
    const alphabetsOnly = inputValue.replace(/[^A-Za-z]/g, "");
    setInput(alphabetsOnly);
  };
  return (
    <div>
      <div>{input}</div>
      <input type="text" onChange={inputfield} />
    </div>
  );
};

export default Alphabate;
