import React, { useState, useEffect, } from 'react'
import { OpSwitch, GridStack, } from '../components'
import { WidePageContainer, } from './PageComp'


export const Home = props => {
    const [userSelection, setUserSelection]     = useState('Exercises')
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    
    useEffect(() => {
        //console.log(userSelection)
    }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
    }


    return (
        <WidePageContainer>
            <div>
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            </div>
            <div>
                <GridStack />
            </div>
        </WidePageContainer>
        
    )
}
