import React,{Component} from 'react';
import {Link} from'react-router-dom';

class ES6 extends Component{
    render(){
        return (<p>
            <li><Link to="/ES6/variablen">Variablen</Link></li>
            <li><Link to="/ES6/class">Klasse</Link></li>
        </p>)
    }
}

export default ES6;