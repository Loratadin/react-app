import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
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
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList 
        todos={this.state.todos}
        toggleTask={this.toggleTask.bind(this)}
        saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
}
  createTask(task){
this.state.todos.push({
  task,
  isCompleted: false
});
this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask) {
    const foundTodo=_.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos});
  }
}

export default App;
