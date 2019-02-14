import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                placeholder="...todo"
                type="text"
                value={props.task}
                onChange={props.handleChanges}
            />
            
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;