import React, { useState, useEffect, } from 'react'
import { Header, NavContainer, } from './NavComp'
import { useQuery, } from '@apollo/react-hooks'
import { NavWheelTest, } from './NavWheelTest'
import { IS_LOGGED_IN, } from '../../graphql'


export const Nav = () => {
    //const [userData, setUserData] = useState(null)
    const { data } = useQuery(IS_LOGGED_IN)
    
    // useEffect(() => {
    //     if (data && data.isLoggedIn) {
    //         setUserData(data.isLoggedIn)
    //     }
    // }, [data.isLoggedIn])


    return (
        <NavContainer>
            <Header id='navHeader'>RACEMATE</Header>
            
            {data.isLoggedIn && <NavWheelTest />}
        </NavContainer>
    )
}
// {data.isLoggedIn && !loading 
//                 ?   ( 
//                         <NavWheelTest />
//                 ) : (
//                         <Header>XX</Header>
//                 )
//             }