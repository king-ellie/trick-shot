import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import PageHeader from './PageHeader';

function App() {
    return (
        <Router>
            <PageHeader/>

            <Switch>
                <Route exact path='/'>
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App