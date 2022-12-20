import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import DifferentAnglesPage from './DifferentAnglesPage';

function App() {
    return (
        <Router>
            <PageHeader/>

            <Switch>
                <Route exact path='/'>
                    <LandingPage/>
                </Route>

                <Route exact path='/different-angles'>
                    <DifferentAnglesPage/>
                </Route>
            </Switch>

            <PageFooter/>
        </Router>
    )
}

export default App