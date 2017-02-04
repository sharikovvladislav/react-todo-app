import React from 'react';

import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

import * as User from './User';
import * as TodosApi from './TodosApi';

class TodoApp extends React.Component{
  constructor (props, context) {
    super(props, context);

    this.listItems = [];
    this.listRef = null;

    let self = this;
    if (User.isAuthorized()) {
      TodosApi.getTodosList()
        .then(function (todos) {
          self.listItems = todos.map((todo) =>
            <div>
              <TodoItem data={todo}/>
            </div>
          );
          self.forceUpdate();
        });

      this.listRef = TodosApi.getListRef();
      this.listRef.on('child_added', function(data) {
        const newItem = {
          key: data.key ,
          value: data.val()
        };
      });
    }
  }

  render () {
    if (!User.isAuthorized()) {
      return (
        <h1>Войдите</h1>
      )
    } else {
      return (
        <div>
        <h1>TODO список</h1>
          <TodoAdd/>
          {this.listItems}
        </div>
      )
    }
  }

}

export default TodoApp;