import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import ReactModal from 'react-modal'

import { BasicModalForm } from './BasicModalForm'
import { ModalTitle, 
    ModalCloseButton, 
    modalContent, } from '../ModalComp'
import { InfoIcon, InfoButton, } from '../..'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EDIT_STATUS } from '../../../graphql'   


export const BasicModal = props => {
    const { toggleEditOff, clearEditExerciseId, }         = useContext(ModalFormContext)

    const client                                          = useApolloClient()
    const { isModalEdit }                                 = client.readQuery({ query: GET_EDIT_STATUS })

    const [modalToggle, setModalToggle]                   = useState(false)

    useEffect(() => ReactModal.setAppElement('body'), [])
    
    const handleModalToggle = () => {
        setModalToggle(!modalToggle)

        if (isModalEdit) { 
            toggleEditOff() 
            clearEditExerciseId()
        }     
    }
    

    if (!modalToggle) {
        return (
            <div onClick={handleModalToggle}>
                {props.children} 
            </div>
        )
    }

    const { editId } = props.children.props

    return (
        
        <ReactModal 
            isOpen={modalToggle}
            style={{ overlay: { zIndex: '5000', },
                content: modalContent.modalFrame }}>
            
            <ModalTitle>{editId ? 'Edit Exercise' : 'Add Exercise'}</ModalTitle>
            <ModalCloseButton>
                <InfoIcon 
                    onClick={handleModalToggle}
                    className='fas fa-times'
                    style={{ fontSize: '5rem' }} />
            </ModalCloseButton>
             {/****/}

            <BasicModalForm handleModalToggle={handleModalToggle} />
        </ReactModal>
    )
}
