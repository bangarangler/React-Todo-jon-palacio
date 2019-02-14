import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form className="todo-form" onSubmit={props.addTask}>
            <li className="enter-new">
                <button className="add-button" onClick={props.addTask}>+</button>

                <input
                    placeholder="New Task"
                    type="text"
                    name="task"
                    value={props.task}
                    onChange={props.handleChanges}
                />
            </li>

            <button className="clear-button" onClick={props.removeTask}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;