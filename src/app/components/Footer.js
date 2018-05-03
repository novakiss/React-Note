import React,{Component} from 'react';
import withStlyle from 'react-jss';

const style= {
  footer:{
      position:'fixed',
      width: '100%',
      background: '#222',
      clear: 'both',
      bottom:0,
      color: 'white',
      textAlign:'center',
      height:'auto'
  }
};

class Footer extends Component{
    render(){
        const {footer} = this.props.classes;
        return(
            <div className={footer}>
                <p>Welcome to Projekt of Novakiss</p>
            </div>
        )
    }
}

export default withStlyle(style)(Footer);