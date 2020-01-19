import React, { useEffect, } from 'react'
import { Route, Switch, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { PrivateRoute } from './PrivateRoute'
import { Home, Landing, } from '../../pages'
import { IS_LOGGED_IN } from '../../graphql'


export const Lock = props => {


    const { data } = useQuery(IS_LOGGED_IN)

    useEffect(() => {

        console.log(data)
    }, [data])

    return (
        <Switch>
            <Route /* PUBLIC */
                exact
                path='/'
                component={Landing} />
            <PrivateRoute /* PRIVATE */
                exact
                path='/home'
                component={Home} />
        </Switch>
    )
}
