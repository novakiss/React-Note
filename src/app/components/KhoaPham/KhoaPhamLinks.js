import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default class KhoaPhamLinks extends Component {
    render() {
        return (
            <div className="App">
                <Header text="Projekt KhoaPham"/>
                <div className="App-intro">
                    <li>
                        <Link to="/KhoaPham/grundlagen">React Basic</Link>

                    </li>
                    <li>
                        <Link to="/KhoaPham/aufgabe1">Klick Button</Link>
                    </li>

                    <li>
                        <Link to="/KhoaPham/aufgabe2">Click Change Picture</Link>
                    </li>
                    <li>
                        <Link to="/KhoaPham/aufgabe3">Auto change Picture</Link>
                    </li>
                    <li>
                        <Link to="/KhoaPham/aufgabe4">Render HTML from Array String</Link>
                    </li>
                    <li>
                        <Link to="/KhoaPham/aufgabe5">Render HTML from Object</Link>
                    </li>
                </div>
                <Footer/>
            </div>);
    }
}