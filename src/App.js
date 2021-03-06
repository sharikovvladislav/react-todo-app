import React, { Component } from 'react';

import './FirebaseInit';

import LoginFirebase from './LoginFirebase';
import TodoApp from './TodoApp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO App</h2>
        </div>
        <LoginFirebase />
        <TodoApp />
      </div>
    );
  }
}

export default App;
