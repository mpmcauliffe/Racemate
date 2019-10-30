import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, Signup, } from './pages'
import { Menu } from './components'


const App = () => {
    return (
        <Fragment>
            <Menu />
            <Switch>
                <Route /* PUBLIC */ 
                    exact
                    path='/login'
                    component={Login} />

                <Route /* PUBLIC */ 
                    exact
                    path='/signup'
                    component={Signup} />
            </Switch>
        </Fragment>
    )
}


export default App
