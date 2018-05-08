import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default class KhoaPhamLinks extends Component{
    render(){
        return(
        <div className="App">
            <Header text="Projekt KhoaPham"/>
            <div className="App-intro">
                <li>
                    <Link to="/KhoaPham/grundlagen">Grundlagen</Link>

                </li>
                <li>
                    <Link to="/KhoaPham/aufgabe1">Bấm Button</Link>
                </li>

                <li>
                    <Link to="/KhoaPham/aufgabe2">Đổi Hình</Link>
                </li>

            </div>
            <Footer/>
        </div>);
    }
}