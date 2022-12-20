import React, { useState } from 'react';
import videoAngles from '../videoAngles'

function DifferentAnglesPage() {
  // const [ angles, setAngles ] = useState(videoAngles);

    return (
        <div>
            <h2>Have a look:</h2>

            {/* {
              angles ?
                angles.map((angle, idx) => <p key={idx} className={angle.className}>{angle.title}</p>) :
                <h1>no angles</h1>
            } */}

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