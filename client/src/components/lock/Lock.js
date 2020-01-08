import React from 'react'
import { Redirect, Route, Switch, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { gql, } from 'apollo-boost'
import { Home, Landing, } from '../../pages'


const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

export const Lock = () => {
    const { data } = useQuery(IS_LOGGED_IN);

    if (!data) { 
        return <Landing />
    }

    return (
        <Home />
    )
}
