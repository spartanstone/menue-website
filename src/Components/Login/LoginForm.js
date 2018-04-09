import React, { Component } from 'react';
import {TextField,RaisedButton } from 'material-ui';
import './Login.css';
import {orange500, blue50} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color:blue50,
  },
  margin: 12,
};
class LoginForm extends Component {
  render() {
    return (
    	<div>
	     	    <TextField
      			hintText="Email"
      			hintStyle={styles.errorStyle}
            floatingLabelText="Email Address"
            floatingLabelStyle={styles.errorStyle}

    			/><br/>
           <TextField
            hintText="Password"
            hintStyle={styles.errorStyle}
            floatingLabelText="Password"
            floatingLabelStyle={styles.errorStyle}
            type="password"

          /><br/>
          <RaisedButton label="Login" primary={true} style={styles} />
          <RaisedButton label="SighnUp" secondary={true} style={styles} />
    	</div>

    );
  }
}

export default LoginForm;
