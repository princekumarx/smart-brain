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
    style={{'height':'100%','width':'100%'}} >

 
    <img className="Tilt-inner " alt="not" style={{paddingTop:'15px',width:'100%',height:'100%'}}  src={logo} />
 

    </Tilt>
        
    </div>
)
}

export default Logo;