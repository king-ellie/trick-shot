import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

function LandingPage() {
    return (
        <div>
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

            <h4>See this video on other platforms:</h4>
        </div>
    )
}

export default LandingPage