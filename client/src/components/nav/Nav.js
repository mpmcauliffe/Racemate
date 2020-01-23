import React from 'react'
import { Header, NavContainer, } from './NavComp'
import { useQuery, } from '@apollo/react-hooks'
import { NavWheel, } from './NavWheelComp'
import { NavWheelTest, } from './NavWheelTest'
import { IS_LOGGED_IN, } from '../../graphql'



export const Nav = () => {
    const { data }                              = useQuery(IS_LOGGED_IN)


    return (
        <NavContainer>
            <Header>RACEMATE</Header>
            {/**<Header>XX</Header>**/}
            
            {data.isLoggedIn && 
                <NavWheelTest 
                    style={{  }} />
            }
        </NavContainer>
    )
}
