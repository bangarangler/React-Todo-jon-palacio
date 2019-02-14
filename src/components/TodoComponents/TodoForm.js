import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                placeholder="...todo"
                type="text"
                name="task"
                value={props.task}
                onChange={props.handleChanges}
            />
            <button onClick={props.addTask}>Add Todo</button>
            <button onClick={props.removeTask}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;