import React from 'react';
import { Link } from 'react-router-dom'

function PageLinks() {
    return (
        <div>
            <p>
              <Link to="/different-angles/">
                Click here to see trick shot from different angles
              </Link>
            </p>

            <p>
              <Link to="/party-mode/">
                Click here to enter party mode
              </Link>
            </p>

            <p>
              <Link to="/immersive-mode/">
                Click here to enter immersive mode
              </Link>
            </p>
        </div>
    )
}

export default PageLinks