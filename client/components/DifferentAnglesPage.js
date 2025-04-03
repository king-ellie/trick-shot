import React from 'react';
import videoAngleStyles from '../videoStyles/videoAngleStyles';
import TrickShotVideo from './TrickShotVideo';

function DifferentAnglesPage() {
  return (
    <div>
      <h2>Footage was captured from a number of different angles:</h2>
        {
          videoAngleStyles.map((angle, idx) => <TrickShotVideo key={idx} nameOfStyle={angle.className}/>) 
        }
    </div>
  )
}

export default DifferentAnglesPage