import React from 'react';
import  './style.css';

const Navigation = ({SignOut,isSigned}) => {

if(isSigned){
    return(
 
<nav className="nav" >
    <p onClick={() => SignOut('signout')}
     className='link shadow-3 pointer mr2 br3 bg-light-gray  pa3  hover-bg-light-blue '>Sign Out</p>
    </nav>
 
    )
}
else{
    return(
    <nav  className='nav'>
    <p onClick={() => SignOut('signin')}
     className='link shadow-3 pointer mr2 br3 bg-light-gray  pa3  hover-bg-light-blue '>Sign in</p>
      <p onClick={() => SignOut('register')}
     className='link shadow-3 pointer mr2 br3 bg-light-gray  pa3  hover-bg-light-blue '>Register</p>
    </nav>
    )
}
   
}

export default Navigation;