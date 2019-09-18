import React from 'react';

import './imageinputform.css';

const Imageinputform = (props) => {
    const {handle,detect} = props;
    
    return(
        <div className="space">
      <p className="para">
           This Magic Brain will detect faces in your pictures. Please put some image link to detect face  
      </p>
 <form method="post" >
      <div className="center">
      <div className="pa3 center form shadow-2">
          <input required onChange={handle} className="w-70  f4 pa2 center " type='text'></input>
          <button type="submit" onClick={detect} className='w-30 f4 grow link ph3 pv2 dib white bg-light-purple pointer '>Detect</button>
          </div>
      </div>
      </form>
        </div>
    )
}

export default Imageinputform;