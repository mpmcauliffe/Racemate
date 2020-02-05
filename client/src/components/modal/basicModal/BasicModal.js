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

// <form onSubmit={onSubmit}>
//                 <Alert style={{ marginTop: '1rem' }} />
//                 <Simplebar style={{ height: '80vh', marginTop: '29px', }}>
//                     <FormContainer>
//                         <UserLabel htmlFor='title'>Exercise Name</UserLabel>
//                         <input /* TITLE */
//                             onChange={onChange}
//                             value={title}
//                             name='title'
//                             type='text'
//                             required />

//                         <UserLabel htmlFor='exerciseType'>Exercise Type / Muscle Group</UserLabel>
//                         <input /* EXERCISE_TYPE */
//                             onChange={onChange}
//                             value={exerciseType}
//                             name='exerciseType'
//                             type='text'
//                             required />

//                         <UserLabel htmlFor='description'>Description</UserLabel>
//                         <textarea /* DESCRIPTION */
//                             onChange={onChange}
//                             value={description}
//                             name='description'
//                             type='text' />

//                         <InfoButton
//                             type='submit'
//                             wide
//                         > Add Exercise</InfoButton>
//                     </FormContainer>
//                 </Simplebar>               
//             </form>