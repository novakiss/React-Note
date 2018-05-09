import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import InputDiv from './InputDiv';
import Header from '../Header';
import Footer from '../Footer';

export let list;
export default class List extends Component {
    state = {
        mang: ["KhoaPham", "React", "Redux"]
    };

    add = () => {
        ReactDOM.render(<InputDiv/>, document.getElementById('list'));
    };

    render() {
        list= this;
        return (<div className="App">
                <Header text="Note Projekt"/>
                <div className="div-list">
                    <div id="list"/>
                    <button onClick={this.add}>Add</button>
                    {this.state.mang.map((e, index) => <Note key={index}>{e}</Note>)}
                </div>
                <Footer/>
            </div>
        )
    }
}