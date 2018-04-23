import React, { Component } from 'react';
import {TextField,Button  } from 'material-ui';
import './Login.css';
import PropTypes from 'prop-types';
import {AccountCircle,Email,Lock,} from '@material-ui/icons';
import Input, { InputAdornment } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
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
class LoginForm extends Component {

  render() {
      const { classes } = this.props;
    return (
    	<div>
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
          <TextField
              required
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              InputProps={{
                  className: classes.TextColor,
                  startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                  ),
              }}
              helperText="Please Enter Your Password"
          />

          <div className="ButtonPadding" >

            <Button variant="raised" color="primary" className={classes.button}>
              Login
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
    	</div>


    );
  }
}
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);


