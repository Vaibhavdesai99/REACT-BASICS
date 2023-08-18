import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [error, showerror] = useState(false);

  const inputValue = (e) => {
    showerror(false);
    setText(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (text === "") {
      showerror(true);
    } else {
      console.log("Form submitted successfully");
      setText("");
    }
  };
  return (
    <div className="App">
      <div> InputField Name : {text} </div>
      {error && <div>Fill the form </div>}
      <input type="text" onChange={inputValue} value={text} />
      <button type="button" onClick={submitForm}>
        Submit Form
      </button>
    </div>
  );
}
