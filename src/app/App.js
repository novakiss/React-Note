import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Projekts of Novakiss</h1>
                </header>
                <p className="App-intro">
                    <li>Projekt <a href="/checkNumber">Check Number</a></li>
                    <li>Projekt <a href="/ES6">ES6</a></li>
                </p>
            </div>
        );
    }
}

export default App;
