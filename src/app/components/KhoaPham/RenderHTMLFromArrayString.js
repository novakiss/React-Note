import React,{Component} from 'react';

export default class RenderHTMLFromArrayString extends Component{
    render(){
        return(
            <div>
                {this.props.text}
            </div>
        )
    }
}