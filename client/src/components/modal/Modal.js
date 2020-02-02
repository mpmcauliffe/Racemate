import React, { useState, useEffect, } from 'react'
import ReactModal from 'react-modal'

import { ModalTitle, 
    FooterIcon,
    ModalCloseButton, 
    modalContent, } from './ModalComp' 
import { 
    Alert,
    FormContainer, 
    InfoIcon, 
    InfoButton, 
    UserLabel, } from '../../components'

import { useMutation, } from '@apollo/react-hooks'
import { ADD_EXERCISE, } from '../../graphql'

import 'simplebar/dist/simplebar.min.css'


export const Modal = () => {
    const [modalToggle, setModalToggle] = useState(false)
    const [addExercise]                 = useMutation(ADD_EXERCISE) 

    const [formData, setFormData]       = useState({
        title: '',
        exerciseType: '',
        description: ''
    })

    useEffect(() => ReactModal.setAppElement('body'), [])
    
    const handleModalToggle = () => setModalToggle(!modalToggle)
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
    }

    if (!modalToggle) {
        return <FooterIcon 
                    onClick={handleModalToggle}
                    className='fas fa-plus' /> 
    }

    const { title, exerciseType, description } = formData

    return (
        
        <ReactModal 
            isOpen={modalToggle}
            style={{ overlay: { zIndex: '5000', },
                content: modalContent.modalFrame }}>

            {/****/}
            <ModalTitle>Add Exercise</ModalTitle>
            <ModalCloseButton>
                <InfoIcon 
                    onClick={handleModalToggle}
                    className='fas fa-times'
                    style={{ fontSize: '5rem' }} />
            </ModalCloseButton>
             
            <form onSubmit={onSubmit}>
                <Alert style={{ marginTop: '1rem' }} />
                <FormContainer>
                    <UserLabel htmlFor='title'>Exercise Name</UserLabel>
                    <input /* TITLE */
                        onChange={onChange}
                        value={title}
                        name='title'
                        type='text'
                        required />

                    <UserLabel htmlFor='exerciseType'>Exercise Type / Muscle Group</UserLabel>
                    <input /* EXERCISE_TYPE */
                        onChange={onChange}
                        value={exerciseType}
                        name='exerciseType'
                        type='text'
                        required />

                    <UserLabel htmlFor='description'>Description</UserLabel>
                    <textarea /* DESCRIPTION */
                        onChange={onChange}
                        value={description}
                        name='description'
                        type='text' />

                    <InfoButton
                        type='submit'
                        wide
                    > Add Exercise</InfoButton>
                </FormContainer>
            </form>
        </ReactModal>
        
    )
}
