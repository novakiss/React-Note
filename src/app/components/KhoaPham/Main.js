import React, {Component} from 'react';
import KhoaPham from './KhoaPham';

class Main extends Component {
    render() {
        return (<div>
            <KhoaPham ten="MinhTan" khoahoc="NodeJS">Köln</KhoaPham>;
            <KhoaPham ten="Novakiss" khoahoc="ReactJS">Leipzig</KhoaPham> ;
        </div>)
    }
}

export default Main;