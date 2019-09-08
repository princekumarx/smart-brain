import React from 'react';

import './imageinputform.css';

const Imageinputform = (props) => {
    const {handle,detect} = props;
    
    return(
        <div className="space">
      <p className="f3">
          {'This Magic Brain will detect faces in your pictures. Git it '}
      </p>

      <div className="center">
      <div className="pa3 center form shadow-2">
          <input  onChange={handle} className="w-70  f4 pa2 center " type='text'></input>
          <button onClick={detect} className='w-30 f4 grow link ph3 pv2 dib white bg-light-purple pointer '>Detect</button>
          </div>
      </div>
        </div>
    )
}

export default Imageinputform;