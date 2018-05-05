import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Projekts of Novakiss</h1>
                </header>

                <p className="App-intro">
                    <li>Projekt <Link to="/checkNumber">Check Number</Link></li>
                    <li>Projekt <Link to="/ES6">ES6</Link></li>
                    <li>Projekt <Link to="/KhoaPham">Khoa Pham Projekt</Link></li>
                </p>
            </div>
        );
    }
}

export default App;
