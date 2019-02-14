import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let text = e.target[0].value;
    e.target[0].value = "";
    this.setState(state => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          task: text,
          completed: false
        }
      ]
    }));
    //debugger;
  };

  handleClear = () => {
    this.setState(state => ({
      todos: []
    }));
  };

  handleComplete = id => {
    //debugger;
    this.setState(state => {
      let items = state.todos.map(itm => {
        if (itm.id === id) {
          itm.completed = true;
        }
        return itm;
      });
      return {
        todos: [...items]
      };
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} complete={this.handleComplete} />
        <TodoForm thing={this.handleSubmit} clear={this.handleClear} />
      </div>
    );
  }
}

export default App;
