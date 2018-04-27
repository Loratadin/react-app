import React, { Component } from 'react';

export class TodosListItem extends Component {
  constructor (props){
    super(props);

    this.state = {
isEditing: false
    };
  }
  renderActionSection(){
    if(this.state.isEditing) {
      return(
<button onClick={this.onEditClick.bind(this)}>Save</button>
          <button>Cancel</button>
      );
    }
    return(
<button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
    );
  }
  render() {
    return (
        <tr>
         <td>{this.props.task}</td>
         <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
         </td>
        </tr>
    );
  }
  onEditClick(){
    this.setState({ isEditing: true});
  }
}