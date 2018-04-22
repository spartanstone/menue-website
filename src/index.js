import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login/Login';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';


const Rapper = () => (
    <BrowserRouter>
      <MuiThemeProvider>
        <Login />
      </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<Rapper />, document.getElementById('root'));
registerServiceWorker();
