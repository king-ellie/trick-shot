import React, { useState } from 'react';

function PartyMode() {
  const [ clickCoordinates, setClickCoordinates ] = useState([])

  const captureClickCoordinates = (event) => {
    console.log(`${event.nativeEvent}`)
    setClickCoordinates([...clickCoordinates, {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY
    }])
  }


  return (
    <div onClick={captureClickCoordinates} className="party-mode">
      <h2>Click anywhere below to party. The more you click, the more you party</h2>

      { clickCoordinates.map((clickCoordinates) =>
        <video
            height="630"
            type="video/mov"
            src="../../public/trick_shot.MOV"
            autoPlay
            loop
            style={{position: "absolute", left: clickCoordinates.x, top: clickCoordinates.y}}
        >
            Your browser does not support the video tag.
        </video>

      )}
    </div>
  )
}


export default PartyMode