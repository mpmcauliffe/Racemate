import React from 'react'
import { useHistory, } from 'react-router-dom' 
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
//import { NavLink } from './NavComp'
import { NavMenuKit, } from './NavMenuComp'
import { UserInfo } from '../../components'
import { IS_LOGGED_IN, } from '../../graphql'


export const NavMenu = () => {
    const client                  = useApolloClient()
    const { data }                = useQuery(IS_LOGGED_IN)
    let history                   = useHistory()

    const onLogoutClick = () => {
        if (data) {
            window.scrollTo(0,0)
            
            localStorage.clear() 
            client.cache.reset()
            client.writeData({ data: { isLoggedIn: false, }})

            history.push('/')
        }
    }


    return (
        <NavMenuKit className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />

            <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>

            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                {/****/}
                <UserInfo />
            </nav>
        </NavMenuKit>
    )
}
