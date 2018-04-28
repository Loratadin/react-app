import React, { Component } from 'react';
import _ from 'lodash';

export class CreateTodo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
if (!this.state.error) { return null; }

return <div style={{ color: 'red'}}>{this.state.Error}</div>
  }
 
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
       <input type="text" placeholder="What do I need to do?" ref="createInput"/>
       <button>Create</button>
       {this.renderError()}
      </form>
    );
  }
  handleCreate(event) {
event.preventDefault();

const createInput = this.refs.createInput;
const task = createInput.value;
const validateInput = this.validateInput(task);

if (validateInput) {
  this.setState({ error: validateInput });
  return;
}
this.setState({ error: null });
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