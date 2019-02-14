import React from "react";
import "./Todo.scss";

const TodoForm = props => {
  return (
      <form>
        <input 
          type="text" 
          placeholder="What do you need to do?" 
          name="todo"
          value={props.value}
          onChange={props.handleChange}
        />
        <button onClick={props.newTodo}>Add Todo</button>
      <button onClick={props.clrItm}>Clear Completed</button>
      </form>
    
  );
};

export default TodoForm;
