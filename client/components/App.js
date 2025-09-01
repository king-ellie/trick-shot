import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom'
import TrickShotVideo from './TrickShotVideo'
import NavBar from './NavBar';
import PageFooter from './PageFooter';
import DifferentAnglesPage from './DifferentAnglesPage';
import PartyModePage from './PartyModePage';
import Confetti from 'react-confetti'
import ForumPage from './forum/ForumPage';


function App() {
    return (
        <Router>
            <Link to="/" style={{textDecoration: "none"}}>
                <h1>❤️ Trick Shots For Girls Only ❤️</h1>
            </Link>

            <NavBar/>
            
            <div className="body-container">
                <Switch>
                    <Route exact path='/'>
                        <TrickShotVideo/>
                    </Route>

                    <Route exact path='/different-angles'>
                        <DifferentAnglesPage/>
                    </Route>

                    <Route exact path='/party-mode'>
                        <Confetti />

                        <PartyModePage/>
                    </Route>

                    <Route exact path='/forum'>
                        <ForumPage/>
                    </Route>
                </Switch>
            </div>
            
            <PageFooter/>
            
        </Router>
    )
}

export default App