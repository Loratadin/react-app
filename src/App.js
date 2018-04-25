import React, { Component } from 'react';
import './App.css';
import TodosList from './todos-list.js';

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
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app!</h1>
        <TodosList />
      </div>
    );
  }
}

export default App;
