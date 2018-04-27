import React, { Component } from 'react';
import './App.css';
import { TodosList } from './todos-list.js';

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
        <h1>Hi, I'm react app!</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
