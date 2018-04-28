import React from 'react';

import App from './app/App';
import Note from './app/components/Note';
import CheckNumber from './app/components/CheckZahl'

import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';


const AppRouter = () => (
    <RouterSwitch>
        <Route path="/" exact component ={App}/>
        <Route path ="/checkNumber" exact component = {CheckNumber}/>
        <Route path ="/note" exact component = {Note}/>
    </RouterSwitch>
);

export default AppRouter;