import React ,{ Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home/home'
import Events from './components/Events/events'
import HubEvents from './components/Events/hubEvents'

const TeamPage = lazy(() => import('./components/Team/teamPage'));

const Routes = () => {
    return (
        <Suspense fallback={<div style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Loading.......</div>}>
            <Switch>
                <Route path="/events/:hubId" component={HubEvents} />
                <Route path="/events" exact component={Events} />
                <Route path="/team" exact component={TeamPage} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Suspense>
    )
}

export default Routes;
