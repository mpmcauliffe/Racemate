import React, { Fragment, useState, useEffect, } from 'react'
import { OpSwitch, GridStack, } from '../components'
import { PageContainer, } from './PageComp'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
import { GET_EXERCISES, IS_LOGGED_IN, } from '../graphql'


export const Home = props => {
    const client                                = useApolloClient()

    const [userSelection, setUserSelection]     = useState('Exercises')
    const { data }                              = useQuery(IS_LOGGED_IN)
    //const { data }                              = useQuery(GET_EXERCISES)
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    
    useEffect(() => {
        console.log(data)
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
        <Fragment>
            <div>
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            </div>
            <div>
                <GridStack />

                <button onClick={onLogoutClick}>Logout</button>
            </div>
        </Fragment>
        
    )
}
