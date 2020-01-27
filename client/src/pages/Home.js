import React, { Fragment, useState, useEffect, } from 'react'
import { OpSwitch, GridStack, Footer, } from '../components'
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
        <Fragment>
            <WidePageContainer>
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            
                <GridStack />
            
            </WidePageContainer>
            <Footer />
        </Fragment>
        
        
    )
}
