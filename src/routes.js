import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home'
import Events from './components/Events/events'
import TeamPage from './components/Team/teamPage'
import HubEvents from './components/Events/hubEvents'

const Routes = () => {
    return (
        <Switch>
            <Route path="/events/:hubId" component={HubEvents} />
            <Route path="/events" exact component={Events} />
            <Route path="/team" exact component={TeamPage} />
            <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default Routes;
