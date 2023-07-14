import React from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = ({ passToTodoList, deleteTodo }) => {
  const handleDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <ListGroup
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        border: "3px solid black",
        borderRadius: "10px",
        padding: "10px 10px",
      }}
    >
      {passToTodoList.map((todoItem, index) => {
        return (
          <div
            key={index}
            className="todolistrendering"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "3rem",
              border: "3px solid black ",
              borderRadius: "10px",
            }}
          >
            <ListGroup.Item style={{ padding: "10px 90px" }}>
              {todoItem}
            </ListGroup.Item>
            <Button variant="danger" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
