import React, {Component} from 'react';
import KhoaHoc from './KhoaHoc';
import InputTag from './InputTag';

class KhoaPham extends Component {
    state = {
        text: null,
        count: this.props.count
    };

    getChildren = (a) => alert(a);

    hienThiChildren = (c) => {
        this.setState({text: c});
    };

    dangKyHoc = () => {
        this.setState({count: parseInt(this.state.count, 10) + 1});
    };

    render() {
        return (
            <div className={this.props.className}>
                <InputTag/>
                {this.props.ten} - <KhoaHoc khoahoc={this.props.khoahoc}/>
                <p>Count of Students : {this.state.count}</p>

                <button onClick={() => {
                    this.getChildren(this.props.children)
                }}>Place of Learning
                </button>
                <button onClick={() => {
                    this.hienThiChildren(this.props.children)
                }}>Push Children
                </button>
                <button onClick={this.dangKyHoc}>Plus Student</button>
                {this.state.text === null ? null : <div>{this.state.text}</div>}
            </div>);
    }
}

export default KhoaPham;