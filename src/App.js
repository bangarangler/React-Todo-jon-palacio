import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos=[
    {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos,
      task: '',
    }
  }

  handleChanges = event => {
    this.setState({
      'task': event.target.value
    });
  };

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

  taskToggle = (taskId) =>{
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== taskId) {
          return todo;
        }

        else if (todo.completed === false) {
          return {
            ...todo,
            completed: true
          };
        }

        else return{
          ...todo,
          completed: false
        }
      })
    }); 
  }

  removeTask = event => {
    event.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo =>todo.completed === false)
    })
  };

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
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
