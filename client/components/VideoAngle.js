import React from 'react';

function VideoAngle(props) {
  const { angle } = props;

    return (
        <div>
            <h3>{angle.title}</h3>

            <div className={angle.className}>
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

export default VideoAngle