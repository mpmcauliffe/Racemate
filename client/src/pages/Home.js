import React from 'react'
import { OpSwitchExperimental, } from '../components'

import { GET_EXERCISES, } from '../graphql'


export const Home = () => {
    const optButtons = ['Exercises', 'Workouts', 'Routine']

    return (
        <div>
            <OpSwitchExperimental optButtons={optButtons} />
        </div>
    )
}
