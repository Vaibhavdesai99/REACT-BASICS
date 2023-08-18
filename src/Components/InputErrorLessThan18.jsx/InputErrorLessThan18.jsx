import React, { useState } from "react";

const Error_msg = "Age should be greater than 18+";
const App = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const inputValue = (e) => {
    setError(false);

    let inputValue = parseInt(e.target.value); //ParseInt imp here caz input is string .
    setText(e.target.value);
    if (inputValue < 18) {
      setError(true);
    }
  };

  return (
    <>
      <div>show Input Text : {text} </div>
      {error && Error_msg}
      <hr />
      <input type="number" onChange={inputValue} value={text} />
    </>
  );
};

export default App;
