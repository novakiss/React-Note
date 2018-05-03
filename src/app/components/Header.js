import React,{Component} from 'react';
import withStyle from 'react-jss';

const style ={
    head: {
        background: '#222',
        height: 'auto',
        color: '#ffffff',
        fontSize: 'xx-large',
        textAlign: 'center',
    }
};

class Header extends Component{
    render(){
        const {head}= this.props.classes;
        const {text}= this.props;

        return(
            <h1 className={head}>
                {text}
            </h1>
        )

    }
}

export default withStyle(style) (Header);