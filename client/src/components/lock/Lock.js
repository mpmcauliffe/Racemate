import React, { useEffect, } from 'react'
import { Redirect, Link, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { Home, Landing, } from '../../pages'
import { IS_LOGGED_IN } from '../../graphql'


export const Lock = () => {
    const { data } = useQuery(IS_LOGGED_IN)
    
    // if (data) {
    //     const { isLoggedIn, userToken, } = data
    // }

    useEffect(() => {
        console.log(data)
    }, [data])


    if (!data.isLoggedIn) { 
        return <Landing />
    }

    return (
        <Home />
    )
}
