import React from 'react';

import * as User from './User';

class TodoApp extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  render () {
    if (!User.isAuthorized()) {
      return (
        <h1>Войдите</h1>
      );
    } else {
      return (
        <h1>Показать TODO список</h1>
      );
    }
  }

}

export default TodoApp;