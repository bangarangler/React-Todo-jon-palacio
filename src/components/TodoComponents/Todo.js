import React from 'react';
import './Todo.css';

function Todo(props){
    return <p onClick={props.taskToggle}>{props.todos.task}</p>;
}

export default Todo;