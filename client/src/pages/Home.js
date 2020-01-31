import React, { Fragment, useState, useEffect, } from 'react'
import { useApolloClient, } from '@apollo/react-hooks'
import { OpSwitch, GridStack, Footer, } from '../components'
import { WidePageContainer, } from './PageComp'


export const Home = props => {
    const client                                = useApolloClient()
    const [userSelection, setUserSelection]     = useState('Exercises')
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    client.writeData({ data: { userSelection: userSelection } })
    
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
            <Footer addButtonAction={userSelection} />
        </Fragment>
        
        
    )
}
