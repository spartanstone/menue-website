import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';


const Rapper = () => (

      <MuiThemeProvider>

        <App />

      </MuiThemeProvider>

);

ReactDOM.render(<Rapper />, document.getElementById('root'));
registerServiceWorker();
