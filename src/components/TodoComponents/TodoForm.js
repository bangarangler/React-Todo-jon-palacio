import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                value={props.task}
                placeholder='...todo'
                name='task'
                type='text'
                onChange={props.handleChanges}
            />
            <button onClick={props.addTask}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;