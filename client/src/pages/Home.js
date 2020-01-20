import React, { useState, useEffect, } from 'react'
import { OpSwitch, } from '../components'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'

import { GET_EXERCISES, IS_LOGGED_IN, } from '../graphql'


export const Home = props => {
    const client                                = useApolloClient()

    const [userSelection, setUserSelection]     = useState('Exercises')
    const { userData }                          = useQuery(IS_LOGGED_IN)
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    
    useEffect(() => {
        //console.log(userSelection)
    }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
    }

    const onLogoutClick = () => {
        if (userData) {
            console.log('AAAAAA')
            client.writeData({ data: { isLoggedIn: false, }})
            localStorage.clear()
        }
    }

    return (
        <div>
            
            <OpSwitch 
                optButtons={optButtons}
                handleToggle={handleToggle} />

            <button onClick={onLogoutClick}>Logout</button>


        </div>
    )
}
