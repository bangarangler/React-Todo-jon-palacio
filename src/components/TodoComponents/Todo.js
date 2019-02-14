import React from 'react';
import './Todo.css';

const Todo = props =>{
    return(
        <div>
            <li
                className="todo-task"
                style={props.todos.completed ? {textDecoration: 'line-through', listStyleType: 'disc'} : null}
                onClick={()=> props.taskToggle(props.todos.id)}
            >
                {props.todos.task}
            </li>
        </div>
    );
}

export default Todo;