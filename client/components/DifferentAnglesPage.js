import React from 'react';
import videoAngles from '../videoAngles';
import VideoAngle from './VideoAngle';

function DifferentAnglesPage() {
  return (
    <div>
      <h2>Have a look:</h2>

      {
        videoAngles ?
          videoAngles.map((angle, idx) => <VideoAngle key={idx} angle={angle}/>) :
          <h1>no other angles :(</h1>
      }
    </div>
  )
}

export default DifferentAnglesPage