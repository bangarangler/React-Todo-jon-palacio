// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="TodoList">
            {props.todos.map((todo, index) => {
                return <Todo taskToggle={props.taskToggle} todos={todo} id={index}/>
            })}
        </div>
    );
}

export default TodoList;