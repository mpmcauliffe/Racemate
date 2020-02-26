import React, { useState, useEffect, } from 'react'
import ReactModal from 'react-modal'

import { SetReps, DateModule, TimeDistance,
    Stopwatch, } from '../../input'
import { ModalTitle, ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon,  Accordion, FormContainer, 
    InfoButton, } from '../..'

import Simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


export const ActiveModal = props => {
    const [modalToggle, setModalToggle]                   = useState(false)

    useEffect(() => ReactModal.setAppElement('body'), [])
    
    const handleModalToggle = () => setModalToggle(!modalToggle)
    
    const onSaveClick = e => {
        console.log('AAAAAA!')
    }

    
    if (!modalToggle) {
        return (
            <div onClick={handleModalToggle}>
                {props.children} 
            </div>
        )
    }

    const { activeName } = props.children.props

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
                        <InfoButton 
                            wide
                            onClick={onSaveClick}
                            style={{ marginBottom: '5rem' }}>Save ALL changes</InfoButton>

                        <Accordion name='Sets, reps & weight'>
                            <SetReps />
                        </Accordion>

                        <Accordion name='Stopwatch'>
                            <Stopwatch />
                        </Accordion>

                        <Accordion name='Time & distance (manual)'>
                            <TimeDistance />
                        </Accordion>

                        <Accordion name='Date'>
                            <DateModule />
                        </Accordion>

                        <InfoButton 
                            wide
                            onClick={onSaveClick}
                            style={{ marginTop: '5rem' }}>Save ALL changes</InfoButton>
                    </FormContainer>
                
            </Simplebar>    
        </ReactModal>        
    )
}
