import React from "react";

const TodoList = props => {
  //console.log(props.todos);
  return (
    <ul>
      {props.todos.map(todo => (
        <li
          className={todo.completed ? "done" : ""}
          onClick={e => props.complete(todo.id)}
          key={todo.id}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
