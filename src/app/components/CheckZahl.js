import React, {Component} from 'react';
import '../../App.css';

class CheckZahl extends Component {
    state = {
        text: '',
        output: ''
    };

    handleChange = (e) =>
        this.setState({text: e.target.value});

    handleSubmit = (e) => {
        this.checkInt(this.state.text) ?
            this.setState({output: "Du hast die Zahl " + parseInt(this.state.text, 10) + " eingegeben"}) :
            this.setState({output: " Bitte eine Zahl eingeben"});
        e.preventDefault();
    };

    checkInt = (num) => {
        const check = parseInt(num, 10);
        return (Number.isInteger(check));
    };

    render() {
        const output = this.state.output;
        return (
            <div className="App">
                <h1>Check Number</h1>
                <form>
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}>OK</button>
                    {output?<div>{output} </div>: <div>bitte geben eine Zahl</div>}
                </form>
                <div>Du kannst <a href="/">hier</a> vorige Seite zurückgehen</div>
            </div>
        )
    }
}

export default CheckZahl;