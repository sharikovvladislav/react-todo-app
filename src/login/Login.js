import React from 'react';
import GoogleLogin from 'react-google-login';
debugger;
import {User} from './../user/User';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseSuccess (googleUser) {
    debugger;
    const idToken = googleUser.getAuthResponse().id_token;
    User.logIn(idToken);
    //anything else you want to do(save to localStorage)...
  }

  responseError (error) {
    debugger;
  }

  render () {
    return (
      <div>
        <GoogleLogin clientId="839806674321-56hf69rhat9l90ib3afqsv6p0419evcc.apps.googleusercontent.com"
                     class="google-login"
                     scope="profile"
                     onSuccess={this.responseSuccess}
                     onFailure={this.responseError}
                     buttonText="Login With Google"/>
      </div>
    );
  }

}

export default Login;