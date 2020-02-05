import React, { useState, useEffect, } from 'react'
import ModalFormState from '../context/modalForm/ModalFormState'
import { useApolloClient, } from '@apollo/react-hooks'
import { OpSwitch, GridStack, Footer, } from '../components'
import { WidePageContainer, } from './PageComp'


export const Home = props => {
    const client                                = useApolloClient()
    const [userSelection, setUserSelection]     = useState('Exercises')
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    client.writeData({ data: { userSelection: userSelection } })

    useEffect(() => {
        
    }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
        client.writeData({ data: { userSelection: userSelection } })
    }


    return (
        <ModalFormState>
            <WidePageContainer>
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            
                <GridStack />
            
            </WidePageContainer>
            <Footer />
        </ModalFormState>
        
        
    )
}
