import React, { useState, useEffect, } from 'react'
import ReactModal from 'react-modal'

import { SetReps, } from '../../input'
import { ModalTitle, 
    ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon, 
    Accordion, 
    FormContainer, 
    InfoButton, } from '../..'

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
                        <InfoButton wide>Save ALL changes</InfoButton>

                        <Accordion name='Sets, reps & weight'>
                            <SetReps />
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
