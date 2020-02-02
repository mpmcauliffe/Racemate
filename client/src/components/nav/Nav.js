import React from 'react'
import { Header, NavContainer, } from './NavComp'
import { useQuery, } from '@apollo/react-hooks'
import { NavMenu } from './NavMenu'

import { IS_LOGGED_IN, } from '../../graphql'


export const Nav = () => {
    const { data } = useQuery(IS_LOGGED_IN)

    return (
        <NavContainer>
            <Header id='navHeader'>RACEMATE</Header>
            
            {data.isLoggedIn && <NavMenu />}
        </NavContainer>
    )
}
