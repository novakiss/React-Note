import React from 'react';

import App from './app/App';
import CheckNumber from './app/components/CheckZahl'
import ES6 from './app/components/ecmascript 6/ES6';
import Variablen from './app/components/ecmascript 6/variablen';
import Klasse from './app/components/ecmascript 6/Klasse';
import KhoaPhamLinks from './app/components/KhoaPham/KhoaPhamLinks';
import Grundlagen from './app/components/KhoaPham/reactBasic/Grundlagen';
import Aufgabe1 from './app/components/KhoaPham/clickButton/KlickButton';
import Aufgabe2 from './app/components/KhoaPham/clickChangePicture/KlickchangePictures';
import Aufgabe3 from './app/components/KhoaPham/autoChangePictures/AutoChangePicture';
import Aufgabe4 from './app/components/KhoaPham/renderHTMLFromArrayString/List';
import Aufgabe5 from './app/components/KhoaPham/renderHTMLFromObject/Objekt';
import Note from './app/components/Note/List';

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
        <Route path ="/KhoaPham" exact component = {KhoaPhamLinks}/>
        <Route path ="/KhoaPham/grundlagen" exact component = {Grundlagen}/>
        <Route path ="/KhoaPham/aufgabe1" exact component = {Aufgabe1}/>
        <Route path ="/KhoaPham/aufgabe2" exact component = {Aufgabe2}/>
        <Route path ="/KhoaPham/aufgabe3" exact component = {Aufgabe3}/>
        <Route path ="/KhoaPham/aufgabe4" exact component = {Aufgabe4}/>
        <Route path ="/KhoaPham/aufgabe5" exact component = {Aufgabe5}/>
        <Route path ="/note" exact component = {Note}/>
    </RouterSwitch>
);

export default AppRouter;