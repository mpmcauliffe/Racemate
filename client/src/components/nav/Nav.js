import React from 'react'
import { Header, NavContainer, } from './NavComp'
import { NavWheel, } from './NavWheelComp'


export const Nav = () => {
    return (
        <NavContainer>
            <Header>RACEMATE</Header>
            {/**<Header>XX</Header>**/}
            <NavWheel />
        </NavContainer>
    )
}
