import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import ReactModal from 'react-modal'

import { SetGauge, } from '../../input'
import { ModalTitle, 
    ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon, 
    Accordion, 
    FormContainer, 
    InfoButton, } from '../..'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EDIT_STATUS } from '../../../graphql'   

import Simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


export const ActiveModal = props => {
    const [modalToggle, setModalToggle]                   = useState(false)

    useEffect(() => ReactModal.setAppElement('body'), [])
    
    const handleModalToggle = () => setModalToggle(!modalToggle)
    
    
    if (!modalToggle) {
        return (
            <div onClick={handleModalToggle}>
                {props.children} 
            </div>
        )
    }

    const { activeId, activeName } = props.children.props

    return (

        <ReactModal 
            isOpen={modalToggle}
            style={{ overlay: { zIndex: '5000', },
                content: modalContent.modalFrame }}>
            
            <ModalTitle>{activeName}</ModalTitle>
            <ModalCloseButton>
                <InfoIcon 
                    onClick={handleModalToggle}
                    className='fas fa-times'
                    style={{ fontSize: '5rem' }} />
            </ModalCloseButton>
            {/****/}

            <Simplebar style={{ height: '80vh', marginTop: '29px', }}>
                
                    <FormContainer>
                        <InfoButton wide>Save ALL changes</InfoButton>

                        <Accordion name='Sets, reps & weight'>
                            <SetGauge />
                        </Accordion>

                        <Accordion name='Endurance & time'>
                        </Accordion>

                        <Accordion name='Timer'>
                        
                        </Accordion>

                        <Accordion name='Date'>
                        
                        </Accordion>

                        <InfoButton wide>Save ALL changes</InfoButton>
                    </FormContainer>
                
            </Simplebar>    
        </ReactModal>        
    )
}
