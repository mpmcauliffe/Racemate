import React, { useState } from 'react'
import { OpSwitchExperimental, } from '../components'

import { GET_EXERCISES, } from '../graphql'


export const Home = () => {

    const [userSelection, setUserSelection] = useState('')
    const optButtons = ['Exercises', 'Workouts', 'Routine']

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
        console.log(userSelection)
    }

    return (
        <div>
            <OpSwitchExperimental 
                optButtons={optButtons}
                handleToggle={handleToggle} />
        </div>
    )
}
