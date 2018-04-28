import React, {Component} from 'react';

export default class Note extends Component {
    state = {
        text: '',
        output: ''
    };

    handleChange = (e) =>
        this.setState({text: e.target.value});

    handleSubmit = (e) => {
        this.checkInt(this.state.text)?
        this.setState({output: parseInt(this.state.text,10)+1}):this.setState({output:"Zahl eingeben"});
        e.preventDefault();
    };

    checkInt = (num) => {
        const check = parseInt(num,10);
        return(Number.isInteger(check));
    };

    render() {
        const output = this.state.output;
        return (<form>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
            <button type="submit" onClick={this.handleSubmit}>OK</button>
            <div>{output}</div>
        </form>)
    }
}