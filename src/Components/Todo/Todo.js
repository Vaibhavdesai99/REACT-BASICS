import React, { useState } from "react";

const Todo = (props) => {
  const [text, settext] = useState("");

  const inputText = (e) => {
    settext(e.target.value);
  };

  //craeted separate object : and id :
  const id = Math.random();
  const obj = {
    text,
    id,
  };

  // form submit handler :
  const formDataSubmited = (e) => {
    e.preventDefault();
    props.onTodo(obj);
    settext("");
  };
  return (
    <>
      <form onSubmit={formDataSubmited}>
        <h1>Add Your Todo Here</h1>
        <label>Todo add </label>
        <input type="text" onChange={inputText} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default Todo;
