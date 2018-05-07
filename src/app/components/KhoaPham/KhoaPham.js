import React, {Component} from 'react';
import KhoaHoc from './KhoaHoc';
import InputTag from './InputTag';

class KhoaPham extends Component {
    state = {
        text: null,
        tongHocVien: this.props.tongHocVien
    };

    getChildren = (a) => alert(a);

    hienThiChildren = (c) => {
        this.setState({text: c});
    };

    dangKyHoc = () => {
        this.setState({tongHocVien: parseInt(this.state.tongHocVien, 10) + 1});
    };

    render() {
        return (
            <div>
                <InputTag/>
                {this.props.ten} - <KhoaHoc khoahoc={this.props.khoahoc}/>
                <p>Tong So Hoc Vien: {this.state.tongHocVien}</p>

                <button onClick={() => {
                    this.getChildren(this.props.children)
                }}>Thong tin Children
                </button>
                <button onClick={() => {
                    this.hienThiChildren(this.props.children)
                }}>Hien thi Children
                </button>
                <button onClick={this.dangKyHoc}>Dang Ky hoc</button>
                {this.state.text === null ? null : <div>{this.state.text}</div>}
            </div>);
    }
}

export default KhoaPham;