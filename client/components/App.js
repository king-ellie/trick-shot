import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <LandingPage></LandingPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default App