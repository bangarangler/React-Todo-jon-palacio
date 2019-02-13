import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
    const newTask = {
      task: this.state.task
    };

    this.setState({
      ToDoList: [...this.state.ToDoList, newTask],
      task:''
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.task]: event.target.value
    });
  };
  // this component is going to take care of state, and any change
  // handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
