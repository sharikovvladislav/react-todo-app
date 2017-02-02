import React from 'react';

import * as User from './User';

class TodoApp extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  onClick () {

  }

  render () {
    if (!User.isAuthorized()) {
      return (
        <h1>Войдите</h1>
      )
    } else {
      return (
        <div>
        <h1>Показать TODO список</h1>
        <button
          onClick={this.onClick}
        >
          Do it
        </button>
        </div>
      )
    }
  }

}

export default TodoApp;