import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home'
import Events from './components/Events/events'
import TeamPage from './components/Team/teamPage'

const Routes = () => {
    return (
        <Switch>
            <Route path="/eventlol" exact component={Events} />
            <Route path="/team" exact component={TeamPage} />
            <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default Routes;
