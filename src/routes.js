import React ,{ Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home';
import HubEvents from './components/Events/hubEvents';

const Events = lazy(() => import('./components/Events/events'));
const TeamPage = lazy(() => import('./components/Team/teamPage'));

const Routes = () => {
    return (
        <Suspense fallback={<div className="lds-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>}>
            <Switch>
              <Route path="/events/:hubId" component={HubEvents} />
              <Route path="/events" exact render={() => <Events />} />
              <Route path="/team" exact render={() => <TeamPage />} />
              <Route path="/" exact component={Home} />
            </Switch>
        </Suspense>
    )
}

export default Routes;
