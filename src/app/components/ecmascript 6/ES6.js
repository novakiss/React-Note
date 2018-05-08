import React,{Component} from 'react';
import {Link} from'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class ES6 extends Component{
    render(){
        return (<p className="App">
            <Header text="Grundlagen von ES6"/>
            <div className="App-intro">
            <li><Link to="/ES6/variablen">Variablen</Link></li>
            <li><Link to="/ES6/class">Klasse</Link></li>
            </div>
            <Footer/>
        </p>)
    }
}

export default ES6;