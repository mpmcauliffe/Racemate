import React from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Home, Landing, } from '../../pages'
import { IS_LOGGED_IN } from '../../graphql'


export const Lock = () => {
    const { data } = useQuery(IS_LOGGED_IN);

    if (!data) { 
        return <Landing />
    }

    return (
        <Home />
    )
}
