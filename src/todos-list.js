import _ from 'lodash';
import React, { Component } from 'react';
import { TodosListHeader } from './todos-list-header';

export class TodosList extends Component {
  renderItems() {
return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}{...todo}/>);
  }
  render() {
    return (
      <table>
       <TodosListHeader />
       <tbody>
         {this.renderItems()}
       </tbody>
      </table>
    );
  }
}

