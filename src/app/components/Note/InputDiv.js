import React,{Component} from 'react';
import ReactDOM from'react-dom';
import {list} from './List'


export default class InputDiv extends Component{

    add=()=>{
        if(this.refs.txt.value!==''){
        list.setState({mang: list.state.mang.concat(this.refs.txt.value)});}
        ReactDOM.unmountComponentAtNode(document.getElementById('list'));
    };

    render(){
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your Note"/>
                <button onClick={this.add}>Thêm</button>
            </div>
        )
    }
}