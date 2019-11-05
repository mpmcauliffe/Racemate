import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'
//import { Login, Signup, } from './pages'
import { Login, Menu, Nav, } from './components'


const App = () => {
    return (
        <Fragment>
            <Nav />

            <Login />
            
        </Fragment>
    )
}


export default App

// <Switch>
//                 <Route /* PUBLIC */ 
//                     exact
//                     path='/login'
//                     component={Login} />

//                 <Route /* PUBLIC */ 
//                     exact
//                     path='/signup'
//                     component={Signup} />
//             </Switch>
