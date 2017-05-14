import React from 'react';

import * as firebase from 'firebase';

import * as User from './User';
import * as TodosApi from './TodosApi';

class LoginFirebase extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onEnterClick() {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.dir(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        User.logIn(user, token);
        // здесь нужно как-то заставить перерисоваться всю страницу
        window.location.href = '/';
      })
      .catch(function(error) {
        console.error({
          errorCode: error.code,
          errorMessage: error.message,
          email: error.email,
          credential: error.credential
        });
        // ...
      });
  }

  onExitClick() {
    firebase.auth().signOut().then(
      function() {
        // Sign-out successful.
        User.logOut();
        window.location.href = '/';
      },
      function(error) {
        console.error({
          errorCode: error.code,
          errorMessage: error.message,
          email: error.email,
          credential: error.credential
        });
      }
    );
  }

  getUserName() {
    return User.getUserName();
  }

  render() {
    if (!User.isAuthorized()) {
      return (
        <div>
          <button key={this.key} onClick={this.onEnterClick}>
            Вход
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Привет, {this.getUserName()}</h1>
          <button key={this.key} onClick={this.onExitClick}>
            Выход
          </button>
        </div>
      );
    }
  }
}

export default LoginFirebase;
