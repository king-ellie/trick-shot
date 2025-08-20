import React from 'react';

function TrickShotVideo(props) {
    const { nameOfStyle } = props;


    return (
        <div className="center-video">
            <video
                className={nameOfStyle}
                width="1020"
                height="630"
                type="video/mov"
                src="./trick_shot.mp4"
                autoPlay
                loop
                muted

            >
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default TrickShotVideo