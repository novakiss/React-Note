import React, {Component} from 'react';
import RenderHTML from './RenderHTMLFromArrayString'

import Header from '../../Header';
import Footer from '../../Footer';

export default class List extends Component {
    state = {
        mang: ["Hallo", "Hi", "KhoaPham"]
    };

    add = () => {
        this.state.mang.push("NodeJs", "React");
        this.setState(this.state)
    };

    render() {
        return (<div className="App">
                <Header text="Render từ một mảng"/>
                <button onClick={this.add}>Them</button>
                {this.state.mang.map((e, index) => <RenderHTML text={e} key={index}/>)}
                <Footer/>
            </div>
        )
    }
}