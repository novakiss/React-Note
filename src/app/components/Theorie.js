import React,{Component} from 'react';
import withStyle from 'react-jss';

const style ={
    textStyle: {
        textAlign: 'center',
        fontSize: 'x-large',
    }
};

class Theorie extends Component{
    render(){
        const {textStyle} = this.props.classes;
        const {text} =this.props;
        return (
            <div className={textStyle}>
                {text}
            </div>
        )
    }
}

export default withStyle(style)(Theorie)
