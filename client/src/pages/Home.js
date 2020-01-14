import React, { useState, useEffect, } from 'react'
import { OpSwitch, } from '../components'

import { GET_EXERCISES, } from '../graphql'


export const Home = () => {

    const [userSelection, setUserSelection] = useState('Exercises')
    const optButtons = ['Exercises', 'Workouts', 'Routine']

    useEffect(() => {
        console.log(userSelection)
    }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
    }

    return (
        <div>
            <OpSwitch 
                optButtons={optButtons}
                handleToggle={handleToggle} />
        </div>
    )
}
