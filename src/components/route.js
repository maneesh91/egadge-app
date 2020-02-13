import React from 'react'
import {Route, Switch, HashRouter } from 'react-router-dom'
import Home from './pages/home/home'
import Productlanding from './pages/landing/landing'
function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path = "/" component ={Home} />
                <Route path ="/landing" component = {Productlanding} />
            </Switch>
        </HashRouter>
    )
}

export default Routes