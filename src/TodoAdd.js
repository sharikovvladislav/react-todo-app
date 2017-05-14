import React from 'react';

import * as TodosApi from './TodosApi';

class TodoAdd extends React.Component {
  constructor(props, context) {
    super(props, context);

    console.log('constr');
    this.value = '';
  }

  doAdd() {
    let self = this;

    TodosApi.addItemToList(this.value).then(function() {
      self.forceUpdate();
      self.value = '';
    });
  }

  updateInputValue(evt) {
    this.value = evt.target.value;
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateInputValue(e)} />
        <button onClick={e => this.doAdd(e)}>Do add</button>
      </div>
    );
  }
}

export default TodoAdd;
