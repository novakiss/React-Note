import React, {Component} from 'react';
import withStyle from 'react-jss';
import Header from '../Header';
import Footer from '../Footer';
import Code from '../Code';
import Theorie from '../Theorie';

const style = {
    app: {
        margin: '0 auto',
    },
    trai: {
        width: '33%',
        float: 'left',
        background: 'yellow',
        height: '500px'
    },
    giua: {
        width: '33%',
        float: 'left',
        background: 'pink',
        height: '500px'
    },
    phai: {
        width: '34%',
        float: 'right',
        background: 'green',
        height: '500px'
    },
};

class Variablen extends Component {
    render() {
        const {app, trai, phai, giua} = this.props.classes;
        return (
            <div>
                <div className={app}>
                    <Header text="Khai báo biến trong ES6"/>
                    <div>
                        <div className={trai}>
                            <Theorie text="Khai báo bằng Var"/>
                            <div>Nó là biến có phạm vi xuyên suốt một function</div>
                            <div>Ví dụ:</div>

                            <Code text="function(){"/>

                            <Code text="    var a=10;"/>
                            <Code text="    if(true) {"/>
                            <Code text="        a=20;"/>
                            <Code text="        console.log(a)//20}"/>
                            <Code text="}"/>
                            <Code text="console.log(a)//20"/>
                        </div>
                        <div className={giua}>
                            <Theorie text="Khai báo bằng Const"/>
                            <div>Khai báo một hằng số và không thay đổi</div>
                        </div>
                        <div className={phai}>
                            <Theorie text="Khai báo bằng let"/>
                            Chỉ truy cập trong block (block-gebundene Variable definieren)
                            <Code text="function(){"/>

                            <Code text="    let a=10;"/>
                            <Code text="    if(true) {"/>
                            <Code text="        a=20;"/>
                            <Code text="        console.log(a)//20}"/>
                            <Code text="}"/>
                            <Code text="console.log(a)//10"/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default withStyle(style)(Variablen);