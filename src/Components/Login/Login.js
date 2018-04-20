import React, { Component } from 'react';
import './Login.css';
import LoginTab from './LoginTab';


class Login extends Component {

  render() {
    return (
	<div className = "backGround">
      <div>
      <LoginTab></LoginTab>

      </div>
  	</div>
    );
  }
}
export default Login;