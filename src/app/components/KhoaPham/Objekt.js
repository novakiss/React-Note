import React, {Component} from 'react';
import ObjectCalled from './ObjektCalled';
import picture1 from '../../../pictures/1.jpg';
import picture2 from '../../../pictures/2.jpg';
import picture3 from '../../../pictures/3.jpg';
import picture4 from '../../../pictures/4.jpg';
import picture5 from '../../../pictures/5.jpg';
import picture6 from '../../../pictures/6.jpg';
import picture7 from '../../../pictures/7.png';

import Header from '../Header';
import Footer from '../Footer';

const pictures = [picture1, picture2, picture3, picture4, picture5, picture6, picture7];

export default class Objekt extends Component {
    state = {
        mang: [
            {srcPicture: pictures[0], inhalt: "Hello"},
            {srcPicture: pictures[1], inhalt: "React"},
            {srcPicture: pictures[2], inhalt: "KhoaPham"},
        ]
    };

    add = () => {
        this.state.mang.unshift(
            {srcPicture: pictures[3], inhalt: "Add"},
            {srcPicture: pictures[4], inhalt: "Object"},);
        this.setState(this.state);
    };

    render() {
        return (<div className="App">
            <Header text="Render HTML từ mảng đối tượng"/>
            <button onClick={this.add}>Add Picture</button>
            {this.state.mang.map((e, index) => (
                <ObjectCalled key={index} src={e.srcPicture}>{e.inhalt}</ObjectCalled>))}
            <Footer/>
        </div>);
    }
}