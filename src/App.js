// import { useState } from "react";
// import "./App.css";
// import Todo from "./Components/Todo/Todo";
// import TodoList from "./Components/Todo/TodoList";

import React from "react";
import Counter from "./Components/Counter";
const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;

// TODO APP CODE :-

// function App() {
//   const [incomingTodo, setIncomingTodo] = useState([]);

//   const EnteredTodo = (enteringTodoHere) => {
//     setIncomingTodo((prev) => [...prev, enteringTodoHere]);
//   };
//   return (
//     <>
//       <div className="App">
//         <Todo onPassTodo={EnteredTodo} />
//         <TodoList passToTodoList={incomingTodo} />
//       </div>
//     </>
//   );
// }

// export default App;
