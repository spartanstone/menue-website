import React from 'react';
import ReactDOM from 'react-dom';
import LoginTab from './Components/Login/LoginTab';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Rapper = () => (
  <MuiThemeProvider>
    <LoginTab />
  </MuiThemeProvider>
);

ReactDOM.render(<Rapper />, document.getElementById('root'));
registerServiceWorker();
