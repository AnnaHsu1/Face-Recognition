import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {

    return(
        <div className='center mt2'>
            <div className='absolute'>
                <img alt=''id='face' src={imageUrl} height='500px' width='auto'/>
                <div className='bounding-box' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left }}></div>
            </div>
        </div>       
    );
}

export default FaceRecognition;