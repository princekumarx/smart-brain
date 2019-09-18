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
    style={{'height':'80%','width':'80%'}} >

 
    <img className="Tilt-inner " alt="not" style={{paddingTop:'0px',width:'500px',height:'120px'}}  src={logo} />
 

    </Tilt>
        
    </div>
)
}

export default Logo;