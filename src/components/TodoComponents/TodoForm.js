import React from "react";
import "./Todo.scss";

const TodoForm = props => {
  return (
    <React.Fragment>
      <form onSubmit={e => props.thing(e)}>
        <input type="text" placeholder="What do you need to do?" />
        <button>Add Todo</button>
      </form>
      <button onClick={() => props.clear()}>Clear Completed</button>
    </React.Fragment>
  );
};

export default TodoForm;
