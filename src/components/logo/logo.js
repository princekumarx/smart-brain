import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png'
import './logo.css';

const Logo = ()=>{
return(
    <div className="logotop ">
    <Tilt className="Tilt shadow-2 br3" options=
    {{
        max:55,
        scale:1.1
    }} 
    style={{height:150,width:150}} >

 
    <img className="Tilt-inner " alt="not" style={{paddingTop:'20px',width:'100px',height:'100px'}}  src={logo} />
 

    </Tilt>
        
    </div>
)
}

export default Logo;