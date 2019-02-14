// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            <ul className="todo-header">To-Do!</ul>
            <div className="todo-buffer"></div>
            {props.todos.map((todo) => {
                return <Todo
                    taskToggle={props.taskToggle}
                    todos={todo}
                    key={todo.id}
                />
            })}
        </div>
    );
}

export default TodoList;