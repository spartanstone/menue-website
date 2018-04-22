import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './Login/Login';

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component="{Login}"/>

        </Switch>
    </main>
);
export default Main;
