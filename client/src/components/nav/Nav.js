import React from 'react'
import { Header, NavContainer, } from './NavComp'
import { NavWheel, } from './NavWheelComp'
import { NavWheelTest, } from './NavWheelTest'


export const Nav = () => {
    return (
        <NavContainer>
            <Header>RACEMATE</Header>
            {/**<Header>XX</Header>**/}
            <NavWheelTest />
        </NavContainer>
    )
}
