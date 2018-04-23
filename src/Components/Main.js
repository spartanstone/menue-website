import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component={Login}/>
            <Route exact path = '/nav' component={Navbar}/>

        </Switch>
    </BrowserRouter>
)
export default Main;
