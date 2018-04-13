

import React, { Component } from 'react';
import {Button,TextField,} from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import './Login.css';

import LoginForm from './LoginForm'
import SignUpForm from '../SignUp/SignUpForm'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 1 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};



class LoginTab extends Component {
state = {
    value: 0,
  };

    handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
  	 const { classes} = this.props;
    return (

	    <div className = "LoginPadding">

	    <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="#fff"
            fullWidth
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
          <div className = "WelcomeText"><h1>Welcome To Orion</h1></div>
          <SwipeableViews

          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer >
		    	<div className= "LoginText">
		    	<p>Please Login to Continue</p>
		    	<LoginForm></LoginForm>
		    	</div>
	    	</TabContainer>
          <TabContainer >
		    	<div className= "LoginText">
		    	<p>Complete The Fallowing To Join Us </p>
		    	<SignUpForm></SignUpForm>
		    	</div>
          </TabContainer>
        </SwipeableViews>


	    </div>

    );
  }
}

export default LoginTab;

