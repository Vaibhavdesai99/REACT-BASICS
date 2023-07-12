import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Todo = (props) => {
  const [todo, setTodo] = useState("");

  const todoAddhere = (e) => {
    setTodo(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    props.onPassTodo(todo);
  };
  return (
    <Form onSubmit={submitTodo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Add your TODO here</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo"
          onChange={todoAddhere}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Todo;
