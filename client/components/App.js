import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom'
import LandingPage from './LandingPage'
import PageLinks from './PageLinks';
import PageFooter from './PageFooter';
import DifferentAnglesPage from './DifferentAnglesPage';
import PartyModePage from './PartyModePage';
import Confetti from 'react-confetti'
import ImmersiveModePage from './ImmersiveMode';
import ForumPage from './ForumPage';


function App() {
    return (
        <div className="app-container">
            <Router>
                <Link to="/" style={{textDecoration: "none"}}>
                    <h1>❤️ Trick Shots For Girls Only ❤️</h1>
                </Link>

                <Switch>
                    <Route exact path='/'>
                        <PageLinks/>

                        <LandingPage/>
                    </Route>

                    <Route exact path='/different-angles'>
                        <PageLinks/>

                        <DifferentAnglesPage/>
                    </Route>

                    <Route exact path='/party-mode'>
                        <Confetti />

                        <PageLinks/>

                        <PartyModePage/>
                    </Route>

                    <Route exact path='/immersive-mode'>
                        <ImmersiveModePage/>
                    </Route>

                    <Route exact path='/forum'>
                        <ForumPage/>
                    </Route>
                </Switch>

                <PageFooter/>
            </Router>
        </div>
    )
}

export default App