import { useState } from "react";
import Todo from "./Components/Todo";
import Todolist from "./Components/Todolist";
import "./styles.css";

//Lifting the state up
export default function App() {
  const [todoData, setTodoData] = useState([]);

  const IncomingTodoFromTodo = (incomigTodoObject) => {
    setTodoData((prev) => [...prev, incomigTodoObject]);
  };

  // Deleting Todo here :
  const deletetodoID = (enteredid) => {
    // console.log("id " + enteredid);
    const filteredid = todoData.filter((ele) => ele.id !== enteredid);

    setTodoData(filteredid);
  };

  // console.log(todoData);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo onTodo={IncomingTodoFromTodo} />
      <br></br>
      <Todolist todoList={todoData} deletetodoID={deletetodoID} />
    </div>
  );
}
