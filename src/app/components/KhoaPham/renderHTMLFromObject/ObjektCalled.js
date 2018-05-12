import React, {Component} from 'react';

export default class ObjektCalled extends Component {
    render() {
        return (<div className="App">
            <img className="App-picture" src={this.props.src} alt="Failed load"/>
            <p>
                {this.props.children}
            </p>
        </div>)
    }
}