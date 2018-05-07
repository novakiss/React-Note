import React, {Component} from 'react';
import KhoaPham from './KhoaPham';

class Main extends Component {
    render() {
        return (<div>
            <KhoaPham ten="MinhTan" khoahoc="NodeJS" tongHocVien="10">Köln</KhoaPham>;
            <KhoaPham ten="Novakiss" khoahoc="ReactJS" tongHocVien ="20">Leipzig</KhoaPham> ;
        </div>)
    }
}

export default Main;