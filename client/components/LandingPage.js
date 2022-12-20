import React from 'react';

function LandingPage() {
    return (
        <div>
            <div className="center-video">
                <video
                    width="1020"
                    height="630"
                    type="video/mov"
                    src="../../public/trick_shot.MOV"
                    autoPlay
                    loop
                >
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}

export default LandingPage