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
        console.log(this.state.mang[1]);
        list = this;
        return (<div className="App">
                <Header text="Note Projekt"/>
                <div className="div-list">
                    <button onClick={this.add}>Add</button>
                    <div id="list"/>
                    {this.state.mang.map((e, index) => <div key={index}>
                        <Note id={index}>{e}</Note></div>)}
                </div>
                <Footer/>
            </div>
        )
    }
}