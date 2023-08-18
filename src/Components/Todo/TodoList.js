import React from "react";

const Todolist = ({ todoList, deletetodoID }) => {
  // deleting todo from todolist : -

  const deleteTodo = (id) => {
    deletetodoID(id);
  };
  return (
    <>
      <h1>TodoList</h1>
      {todoList.map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.text}</div>
            <button onClick={() => deleteTodo(ele.id)}>Delete Todo </button>
          </div>
        );
      })}
    </>
  );
};
export default Todolist;
