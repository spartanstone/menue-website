import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui';
import './Login.css';
import SwipeableViews from 'react-swipeable-views';
import Login from './Login';

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

class LoginTab extends Component {

  render() {
    return (
      <div>
      <Login></Login>

      </div>
    );
  }
}
export default LoginTab;
