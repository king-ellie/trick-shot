import React from 'react';
import videoAngleStyles from '../videoStyles/videoAngleStyles';
import VideoAngle from './VideoAngle';

function DifferentAnglesPage() {
  return (
    <div>
      <h2>Have a look:</h2>

      {
        videoAngleStyles ?
        videoAngleStyles.map((angle, idx) => <VideoAngle key={idx} angle={angle}/>) :
          <h1>no other angles :(</h1>
      }
    </div>
  )
}

export default DifferentAnglesPage