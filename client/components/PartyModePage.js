import React, { useState } from 'react';
import partyModeStyles from '../videoStyles/partyModeStyles';

function PartyModePage() {
  const [ partyModeVideos, setPartyModeVideos ] = useState([])

  const capturePartyModeVideo = (event) => {
    setPartyModeVideos([...partyModeVideos, {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
      className: choosePartyModeStyle()
    }])

  }

  function choosePartyModeStyle() {
    const indexOfPartyModeStyles = Math.floor(partyModeStyles.length * Math.random())
    const style = partyModeStyles[indexOfPartyModeStyles];
    return style.className;
}


  return (
    <div onClick={capturePartyModeVideo} className="party-mode-wrapper">
      <h2>Click anywhere below to party. The more you click, the more you party</h2>

      { partyModeVideos.map((partyModeVideos, idx) =>
        <video
            key={idx}
            height="500"
            type="video/mov"
            src="./trick_shot.MOV"
            autoPlay
            loop
            style={{position: "absolute", left: partyModeVideos.x, top: partyModeVideos.y}}
            className={partyModeVideos.className}
        >
            Your browser does not support the video tag.
        </video>

      )}
    </div>
  )
}


export default PartyModePage