import React,{Component} from 'react';

export default class Note extends Component{
    render(){
        return (
            <div className="div-note">
                {this.props.children}
            </div>
        )
    }
}