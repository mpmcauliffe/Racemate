import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Menu } from './components'


const App = () => {
    return (
        <Fragment>
            <Menu />
            <Switch></Switch>
        </Fragment>
    )
}


export default App
