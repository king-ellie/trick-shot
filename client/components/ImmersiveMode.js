import React from 'react';

function ImmersiveModePage() {
  return (
    <div className="center-video">
      <p>Scroll down and put face close to screen to enter to immersive mode</p>

      <video
          height="100%"
          width="100%"
          type="video/mov"
          src="./trick_shot.MOV"
          autoPlay
          loop
      >
          Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default ImmersiveModePage