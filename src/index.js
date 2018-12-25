import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterWrapper from './components/RouterWrapper/routerWrapper';

import Route from './routes';

ReactDOM.render(
    <BrowserRouter>
        <RouterWrapper>
            <Route />
        </RouterWrapper>
    </BrowserRouter>
, document.getElementById('root'));
