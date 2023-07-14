import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";
import TodoList from "./Components/Todo/TodoList";

function App() {
  const [incomingTodo, setIncomingTodo] = useState([]);

  const addTodo = (newTodo) => {
    setIncomingTodo((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodo = incomingTodo.filter((_, i) => i !== index);
    setIncomingTodo(updatedTodo);
  };

  return (
    <>
      <div className="App">
        <Todo onPassTodo={addTodo} />
        <TodoList passToTodoList={incomingTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
