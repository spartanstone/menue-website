import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import {TextField,Button  } from 'material-ui';
import {AccountCircle,Email,Lock} from '@material-ui/icons';
import Input, { InputAdornment } from 'material-ui/Input';
import Icon from 'material-ui/Icon';
import './SignUp.css';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: '#fff',
  },
  menu: {
    width: 200,
  },
    button: {
        width: 450,
        height: 80,

    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 15,
    },
});


class TextFields extends React.Component {
  state = {

  };


  render() {
    const { classes } = this.props;

    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off">
  
        <TextField
          required
          id="FirstNameInput"
          label="First Name"
          className={classes.textField}
          helperText="Please Enter your First Name "
          margin="normal"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
           }}
        />
        <TextField
          required
          id="LastNameInput"
          label="Last Name"
          className={classes.textField}
          helperText="Please Enter your Last Name"
          margin="normal"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
           }}
        />
        <TextField
          required
          id="EmailInput"
          label="Email"
          className={classes.textField}
          helperText="Please Enter Your Email"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
           }}

        />
        <br/>
        <TextField
          required
          id="password-input"
          label="Password"
          helperText="Please Enter Your Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
           }}
        />

      </form>
                <div className = "buttonPadding" >
            <Button variant="raised" color="primary" className={classes.button}>
              SignUp
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
