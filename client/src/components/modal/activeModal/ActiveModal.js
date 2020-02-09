import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import ReactModal from 'react-modal'

import { ModalTitle, 
    ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon, Accordion, FormContainer, } from '../..'

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
                    <Accordion name='Sets, reps & weight'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maiores sequi praesentium, tenetur explicabo sapiente quas
                        labore possimus illo accusamus ullam rerum sit quibusdam fuga
                        iure id soluta ducimus eaque adipisci?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maiores sequi praesentium, tenetur explicabo sapiente quas
                        labore possimus illo accusamus ullam rerum sit quibusdam fuga
                        iure id soluta ducimus eaque adipisci?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maiores sequi praesentium, tenetur explicabo sapiente quas
                        labore possimus illo accusamus ullam rerum sit quibusdam fuga
                        iure id soluta ducimus eaque adipisci?</p>
                    </Accordion>
                    <Accordion name='Endurance & time'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maiores sequi praesentium, tenetur explicabo sapiente quas
                        labore possimus illo accusamus ullam rerum sit quibusdam fuga
                        iure id soluta ducimus eaque adipisci?</p>
                    </Accordion>
                </FormContainer>
            </Simplebar>    
            
        </ReactModal>
    )
}
