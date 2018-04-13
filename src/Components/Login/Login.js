import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui';
import './Login.css';
import SwipeableViews from 'react-swipeable-views';
import LoginTab from './LoginTab';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

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