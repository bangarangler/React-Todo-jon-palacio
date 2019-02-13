import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos=[];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos,
      task: '',
    }
  }

  addTask = event => {
    event.preventDefault();

    this.setState({
      todos: [...this.state.todos,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }],
      task:''
    });
  };

  handleChanges = event => {
    this.setState({
      ['task']: event.target.value
    });
  };

  taskToggle = (event) =>{
    event.target.classList.toggle('completed');
  }
  // this component is going to take care of state, and any change
  // handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          taskToggle={this.taskToggle}
        />

        <TodoForm 
          handleChanges={this.handleChanges}
          task={this.state.task} 
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
