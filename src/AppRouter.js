import React from 'react';

import App from './app/App';
import CheckNumber from './app/components/CheckZahl'
import ES6 from './app/components/ecmascript 6/ES6';
import Variablen from './app/components/ecmascript 6/variablen';
import Klasse from './app/components/ecmascript 6/Klasse';

import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

const AppRouter = () => (
    <RouterSwitch>
        <Route path="/" exact component ={App}/>
        <Route path ="/checkNumber" exact component = {CheckNumber}/>
        <Route path ="/ES6" exact component = {ES6}/>
        <Route path ="/ES6/variablen" exact component = {Variablen}/>
        <Route path ="/ES6/class" exact component = {Klasse}/>
    </RouterSwitch>
);

export default AppRouter;