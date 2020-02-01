import React, { useState, useEffect, } from 'react'
import ReactModal from 'react-modal'
import { useApolloClient, useQuery, useMutation, } from '@apollo/react-hooks'

import { FooterIcon, ModalComp, ModalCloseButton, } from './ModalComp' 
import { 
    Alert,
    FormContainer, 
    InfoIcon, 
    InfoButton, 
    Loader,
    UserLabel, } from '../../components'

import { GET_MODAL_STATUS, GET_TOGGLE_STATUS, } from '../../graphql'


export const Modal = () => {
    const [modalToggle, setModalToggle] = useState(false)

    useEffect(() => ModalComp.setAppElement('body'), [])
    
    const handleModalToggle = () => setModalToggle(!modalToggle)
    
    if (!modalToggle) {
        return <FooterIcon 
                    onClick={handleModalToggle}
                    className='fas fa-plus' /> 
    }

    return (
        <ModalComp 
            isOpen={modalToggle}
            style={{ overlay: { zIndex: '5000' } }}>

            {/****/}
            <h3>Add Exercise</h3>
            <ModalCloseButton>
                <InfoIcon 
                    onClick={handleModalToggle}
                    className='fas fa-times'
                    style={{ fontSize: '5rem' }} />
            </ModalCloseButton>
            

            <form>
                <Alert />
                <FormContainer>
                    <UserLabel htmlFor='title'>Exercise Name</UserLabel>
                    <input /* TITLE */
                        //onChange={onChange}
                        //value={email}
                        name='title'
                        type='text' />

                    <UserLabel htmlFor='exerciseType'>Exercise Type / Muscle Group</UserLabel>
                    <input /* EXERCISE_TYPE */
                        //onChange={onChange}
                        //value={email}
                        name='exerciseType'
                        type='text' />

                    <UserLabel htmlFor='description'>Description</UserLabel>
                    <textarea /* DESCRIPTION */
                        //onChange={onChange}
                        //value={email}
                        name='description'
                        type='text' />

                    <InfoButton
                        type='submit'
                        wide
                    > Add Exercise</InfoButton>
                </FormContainer>
            </form>
            
        </ModalComp>
    )
}
