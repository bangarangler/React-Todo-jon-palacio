import React from 'react';

function Todo(props){
    return (
        <div className="Todo">
            {this.state.ToDoList.map((task, index) => (
            <Todo key={index} task={task} />
            ))}
        </div>
    );
}

export default Todo;