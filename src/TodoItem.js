import React from 'react';

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.data = props.data;
  }

  render() {
    return <span>{this.data.name}</span>;
  }
}

export default TodoItem;
