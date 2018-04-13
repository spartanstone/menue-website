import React, { Component } from 'react';
import {TextField,Button  } from 'material-ui';
import './Login.css';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  margin: 12,
});
class LoginForm extends Component {

  render() {
    return (
    	<div>
        <Button variant="raised" component="span" >
          Login
        </Button>

    	</div>

    );
  }
}


export default LoginForm;
