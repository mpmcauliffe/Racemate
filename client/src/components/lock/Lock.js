import React, { useEffect, } from 'react'
import { Link, Redirect, Route, Switch, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import PrivateRoute from './PrivateRoute'
import { Home, Landing, } from '../../pages'
import { IS_LOGGED_IN } from '../../graphql'


export const Lock = () => {


    // const { data } = useQuery(IS_LOGGED_IN)

    // useEffect(() => {
    //     console.log(data)
    // }, [data])


    // if (!data.isLoggedIn) { 
    //     //return <Landing />
    //     return (
    //         <Route /* PUBLIC */
    //             exact
    //             path='/'
    //             component={Landing} />
    //     )
    // }

    // return (
    //     <Route /* PRIVATE */
    //         exact
    //         path='/home'
    //         component={Home} />
    // )
}
