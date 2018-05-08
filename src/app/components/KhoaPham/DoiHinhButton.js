import React, {Component} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import picture1 from '../../../pictures/1.jpg';
import picture2 from '../../../pictures/2.jpg';
import picture3 from '../../../pictures/3.jpg';
import picture4 from '../../../pictures/4.jpg';
import picture5 from '../../../pictures/5.jpg';
import picture6 from '../../../pictures/6.jpg';
import picture7 from '../../../pictures/7.png';

const pictures = [picture1, picture2, picture3, picture4, picture5, picture6, picture7];
export default class Aufgabe2 extends Component {
    state = {
        count: 0
    };

    onClickHandle = () => {
        this.setState({count: (this.state.count >= 0 && this.state.count < 6) ? this.state.count + 1 : 6});
    };

    onClickHandleBack = () => {
        this.setState({count: (this.state.count > 0 && this.state.count < 7) ? this.state.count - 1 : 0});
    };

    render() {
        return (
            <div className="App">
                <Header text ="Đổi Hình Bằng Button"/>
                <img className="App-picture" src={pictures[this.state.count]} alt="Failed Load"/>
                <br/>
                <button onClick={this.onClickHandle}>Tiếp theo</button>
                <button onClick={this.onClickHandleBack}>Quay lại</button>
                <Footer/>
            </div>

        );
    }
}