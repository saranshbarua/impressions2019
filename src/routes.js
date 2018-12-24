import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home'
import Events from './components/Events/events'

const Routes = () => {
    return (
        <Switch>
            <Route path="/events" exact component={Events} />
            <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default Routes;
