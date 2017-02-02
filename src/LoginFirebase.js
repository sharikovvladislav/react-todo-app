import React from 'react';

import * as firebase from "firebase";

import * as User from './User';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  onClick (what) {
    debugger;
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.dir(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      User.logIn(user, token);
      // здесь нужно как-то заставить перерисоваться всю страницу
      window.location.href = '/';
    }).catch(function(error) {
      debugger;
      console.error({
        errorCode: error.code,
        errorMessage: error.message,
        email: error.email,
        credential: error.credential
      });
      // ...
    });
  }

  getUserName () {
    return User.getUserName();
  }

  responseSuccess (googleUser) {
    debugger;
    const idToken = googleUser.getAuthResponse().id_token;
    User.logIn(idToken);
  }

  responseError (error) {
    debugger;
  }

  render () {
    if (!User.isAuthorized()) {
      return (
        <div>
          <button
            key={this.key}
            onClick={this.onClick}>
            Вход
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Привет, {this.getUserName()}</h1>
        </div>
      );
    }
  }

}

export default Login;