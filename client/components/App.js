import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {

    return (
        <div>
            <h1>Trick Shot</h1>

            <video
                width="1020"
                height="630"
                type="video/mov"
                src="../../public/trick_shot.MOV"
                autoPlay
            >
                Your browser does not support the video tag.
            </video>

            <h4>See this video on other platforms:</h4>
        </div>
    )
}

export default App