import React from "react";
import "./Todo.scss";

const Todo = props => {
  return (
  <div style={props.todo.completed ? {textDecoration: "line-through"} : null} onClick={() => props.complete(props.todo.id)}
  >
    {props.todo.task}
  </div>
  )}
export default Todo;
