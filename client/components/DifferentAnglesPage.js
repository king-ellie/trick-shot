import React from 'react';
import videoAngleStyles from '../videoStyles/videoAngleStyles';
import VideoAngle from './VideoAngle';

function DifferentAnglesPage() {
  return (
    <div>
      <h2>Have a look:</h2>
        {
          videoAngleStyles.map((angle, idx) => <VideoAngle key={idx} angle={angle}/>) 
        }
    </div>
  )
}

export default DifferentAnglesPage