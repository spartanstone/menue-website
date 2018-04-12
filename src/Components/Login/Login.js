import React, { Component } from 'react';
import {Button,TextField } from 'material-ui';
import './Login.css';
import {orange500, blue500} from 'material-ui/styles/colors';

import LoginForm from './LoginForm'



class Login extends Component {
  render() {
    return (
    	<div className = "backGround">
	    	<div className = "LoginPadding">
		    	<div className = "WelcomeText"><h1>Welcome To Orian</h1></div>
		    	<div className= "LoginText">
		    	<p>Please Login to Continue</p>
		    	<LoginForm></LoginForm>
		    	</div>
		   <div className= "LoginText">
		    	<p>Need a new account sign up</p>
		    	
		    	</div>
	    	</div>
		</div>

    );
  }
}

export default Login;
