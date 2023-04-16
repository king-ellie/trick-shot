import React from 'react';

function LandingPage() {
    return (
        <div>
            <div className="center-video">
                <video
                    width="1020"
                    height="630"
                    type="video/mov"
                    src="./trick_shot.MOV"
                    autoPlay
                    loop
                    muted
                >
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}

export default LandingPage