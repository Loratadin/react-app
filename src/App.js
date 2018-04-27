import React, { Component } from 'react';
import './App.css';
import { TodosList } from './todos-list.js';
import { CreateTodo } from './create-todo.js';


const todos = [
  {
  task: 'learn react',
  isCompleted: false
},
{
  task: 'make dinner',
  isCompleted: true
}

];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    };
  }
  render() {
    return (
      <div className="App">
        <h1>One day at a time!</h1>
        <h2>Just do it</h2>
        <CreateTodo />
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
