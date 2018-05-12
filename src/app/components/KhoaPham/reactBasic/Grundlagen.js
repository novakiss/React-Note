import React, {Component} from 'react';
import KhoaPham from './KhoaPham';
import Header from '../../Header';
import Footer from '../../Footer';

class Main extends Component {
    render() {
        return (<div className="App">
            <Header text="Grundlagen"/>
            <div className="App-content">
                <KhoaPham className="App-right" ten="MinhTan" khoahoc="NodeJS" count="10">Köln</KhoaPham>
                <KhoaPham className="App-left" ten="Novakiss" khoahoc="ReactJS" count="20">Leipzig</KhoaPham>
            </div>
            <Footer/>
        </div>)
    }
}

export default Main;