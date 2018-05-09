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

export default class DoiHinhTuDong extends Component {
    state = {
        hinh: 0
    };

    componentDidMount(){
        setInterval(this.changePicture,1000);
    }

   changePicture = () =>{
       this.setState({hinh: this.state.hinh===6?0: this.state.hinh+1});
   };

    render() {
        return (<div className="App">
            <Header text="Đổi Hình Tự động"/>
            <img className="App-picture" src={pictures[this.state.hinh]} alt="failed loaded"/>
            <Footer/>
        </div>);
    }
}