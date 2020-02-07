import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import ReactModal from 'react-modal'

import { ModalTitle, 
    ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon, } from '../..'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EDIT_STATUS } from '../../../graphql'   


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

            
        </ReactModal>
    )
}
