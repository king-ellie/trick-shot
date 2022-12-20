import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'

function PageHeader() {
    return (
        <div>
            <Link to="/" style={{textDecoration: "none"}}>
              <h1>Trick Shot</h1>
            </Link>

            <p>
              <Link to="/different-angles/">
                Click here to see trick shot from different angles
              </Link>
            </p>
        </div>
    )
}

export default PageHeader