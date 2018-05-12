import React, {Component} from 'react';
import {list} from './List';

export default class Note extends Component {
    state = {
        update: false,
    };
    xoa = () => {
        let id = this.props.id;
        list.state.mang.splice(id, 1);
        list.setState(list.state);
    };

    sua = () => {
        this.setState({update: true});
    };

    cancel = () => {
        this.setState({update: false})
    };

    save = () => {
        let id = this.props.id;
        list.state.mang[id] = this.refs.txt.value;
        list.setState(this.state);
        this.setState({update: false});
    };


    render() {
        if (this.state.update) {
            return (<div id={this.props.id} className="div-note">
                <input defaultValue={this.props.children} ref="txt"/>
                <button onClick={this.save}>Save</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>);
        }
        else {
            return (
                <div id={this.props.id} className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={this.xoa}>Delete Note</button>
                    <button onClick={this.sua}>Update Note</button>
                </div>
            )
        }
    }
}