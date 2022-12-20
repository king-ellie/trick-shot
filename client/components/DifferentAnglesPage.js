import React, { useState } from 'react';
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

      <div className="landing-page-video">
        <video
            width="1020"
            height="630"
            type="video/mov"
            src="../../public/trick_shot.MOV"
            autoPlay
        >
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default DifferentAnglesPage