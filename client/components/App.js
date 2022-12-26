import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage'
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import DifferentAnglesPage from './DifferentAnglesPage';
import PartyModePage from './PartyModePage';
import Confetti from 'react-confetti'


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

                <Route exact path='/party-mode'>
                    <Confetti />

                    <PartyModePage/>
                </Route>
            </Switch>

            <PageFooter/>
        </Router>
    )
}

export default App