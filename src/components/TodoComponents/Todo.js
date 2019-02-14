import React from 'react';
import './Todo.css';

const Todo = props =>{
    return(
        <div
        style={props.todos.completed ? { textDecoration: 'line-through' } : null}
        onClick={()=> props.taskToggle(props.todos.id)}
        >
            {props.todos.task}
        </div>
    );
}

export default Todo;