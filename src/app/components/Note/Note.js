import React,{Component} from 'react';
import {list} from './List';
//import ReactDOM from "react-dom";
//import UpdateDiv from './UpdateDiv';

let note;
export default class Note extends Component{
    xoa=()=>{
        let id = this.props.id;
        list.state.mang.splice(id,1);
        list.setState(list.state);
    };
    /*
    sua=()=>{
        ReactDOM.render(<UpdateDiv/>, document.getElementById('update'))
    };
    */

    render(){
        note=this;
        return (
            <div id={this.props.id} className="div-note">
                <div id="update"/>
                <p>{this.props.children}</p>
                <button onClick={this.xoa}>Xoa</button>
                <button onClick={this.sua}>Sua</button>
            </div>
        )
    }
}