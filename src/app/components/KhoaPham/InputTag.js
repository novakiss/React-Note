import React,{Component} from 'react';

class InputTag extends Component{
    show =() =>{
        alert(this.refs.sl.value);
    };
    render(){
        return(
            <div>
                <select ref="sl">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi InputTag</button>
            </div>
        )
    }
}

export default InputTag;