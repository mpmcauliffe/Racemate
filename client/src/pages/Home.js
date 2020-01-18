import React, { useState, useEffect, } from 'react'
import { OpSwitch, } from '../components'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'

import { GET_EXERCISES, IS_LOGGED_IN, } from '../graphql'


export const Home = () => {

    const [userSelection, setUserSelection] = useState('Exercises')
    const optButtons = ['Exercises', 'Workouts', 'Routine']
    const client = useApolloClient()
    const { data } = useQuery(IS_LOGGED_IN)

    console.log('AAA')

    useEffect(() => {
        //console.log(userSelection)
    }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
    }

    const onLogoutClick = () => {
         if (data) {
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
