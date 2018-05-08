import React,{Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class Aufgabe1 extends Component{
    constructor(props){
        super(props);
        this.onClickHanler=this.onClickHanler.bind(this);
    }

    state={
      count:0
    };

    onClickHanler(){
        this.setState({count: this.state.count +1});
    }

    render() {
        return (
            <div className="App">
                <Header text ="Klick Button"/>
                <button className="App-button" onClick={this.onClickHanler}>
                    Hello {this.state.count}
                </button>
                <Footer/>
            </div>
        )
    };
}