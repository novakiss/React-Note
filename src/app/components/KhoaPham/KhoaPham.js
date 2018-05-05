import React,{Component} from 'react';
import KhoaHoc from './KhoaHoc';

class KhoaPham extends Component{
    render() {
        return (
        <div>
            {this.props.ten} - <KhoaHoc khoahoc= {this.props.khoahoc}/>
            <p>{this.props.children} ---- Đây là children của Props trong React.</p>
        </div>);
    }
}

export default KhoaPham;