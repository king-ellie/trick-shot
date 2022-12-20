import React from 'react';

function VideoAngle(props) {
  const { angle } = props;

  return (
    <div className="center-video">
      <video
          height="630"
          type="video/mov"
          src="../../public/trick_shot.MOV"
          autoPlay
          className={angle.className}
      >
          Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoAngle