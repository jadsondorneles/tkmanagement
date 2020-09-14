import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Page404 from './pages/404'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Page404} />
        </Switch>
    </BrowserRouter>
)

export default Routes