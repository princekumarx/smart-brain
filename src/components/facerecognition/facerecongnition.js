import React from 'react';
import './faceregnition.css';

const Facerecognition = ({box, imageUrl }) => {
    return(
        <div className="container" >

        <div  className="absolute mt2 ">
         <img id="inputimage" className=" mt2"  src={imageUrl} width="400px"  alt='' height="auto" />
          <div className="bounding-box" style={{top: box.topRow,right: box.rightCol, left:box.leftCol,bottom: box.bottomRow }}></div>

          </div>
        </div>
    )
}


export default Facerecognition;