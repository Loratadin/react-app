import React, { Component } from 'react';
import _ from 'lodash';

export class CreateTodo extends Component {
 
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
       <input type="text" placeholder="What do I need to do?" ref="createInput"/>
       <button>Create</button>
      </form>
    );
  }
  handleCreate(event) {
event.preventDefault();

const createInput = this.refs.createInput;
const task = createInput.value;
const validateInput = this.validateInput(task);

this.props.createTask(task);
this.refs.createInput.value = '';
  }
  validateInput(task) {
    if (!task){ //if there is no task entered
      return 'Please enter a task.';
    } else if (_.find(this.props.todos, todo => task.todo === task )) {
    return 'I remember about this.';
  } else {
    return null;
  }
  }
}