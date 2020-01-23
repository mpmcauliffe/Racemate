import React from 'react'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
import { NavLink } from './NavComp'
import { IS_LOGGED_IN, } from '../../graphql'

import './navWheel.css'


export const NavWheelTest = () => {
    const client                                = useApolloClient()
    const { data }                              = useQuery(IS_LOGGED_IN)

    const onLogoutClick = () => {
        if (data) {
            client.writeData({ data: { isLoggedIn: false, }})
            localStorage.clear()
        }
    }


    return (
        <div className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />

            <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>

            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Add Exercise</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Create Workout</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Generate Routine</NavLink>
                    </li>

                    <br /><br /><br /><br />
                    <br /><br /><br /><br />

                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Profile</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink
                            onClick={onLogoutClick} 
                            className='navigation__link'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}