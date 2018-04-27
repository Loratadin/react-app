import React, { Component } from 'react';

export class CreateTodo extends Component {
 
  render() {
    return (
      <form>
       <input type="text" placeholder="What do I need to do?" />
       <button>Create</button>
      </form>
    );
  }
}