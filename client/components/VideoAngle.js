import React from 'react';

function VideoAngle(props) {
  const { angle } = props;

  return (
    <div className="center-video">
      <video
          height="630"
          type="video/mov"
          src="./trick_shot.MOV"
          autoPlay
          loop
          className={angle.className}
      >
          Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoAngle