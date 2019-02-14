import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    
      todo: ""
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {task: this.state.todo, id: Date.now(), completed: false};
    this.setState({todos: [...this.state.todos, newTodo], todo: ""})
  }

  changeTodo = (event) => this.setState({[event.target.name]: event.target.value})


  handleComplete = id => {
    let todos = [...this.state.todos]
    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    }); this.setState({todos});
  }

  clear = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({todos})
  }
    // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return ( 
      <div>
      
      <TodoList todos = {this.state.todos} 
      complete = {this.handleComplete}
      /> 
      <TodoForm clrItm={this.clear} handleChange={this.changeTodo} newTodo={this.addTodo} value={this.state.todo}/>
      </div>
    );
  }
}

export default App;