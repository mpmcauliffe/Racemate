import React from 'react'
import { useHistory, } from 'react-router-dom' 
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
import { InfoButton, } from './UserInfoComp'
import { IS_LOGGED_IN, } from '../../../graphql'


export const LogoutButton = () => {
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
        <InfoButton onClick={onLogoutClick}>
            Logout
        </InfoButton>
    )
}
