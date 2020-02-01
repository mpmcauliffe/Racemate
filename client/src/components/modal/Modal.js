import React, { useEffect, } from 'react'
import ReactModal from 'react-modal'

import { ModalComp, } from './ModalComp' 
import { 
    Alert,
    FormContainer, 
    InfoIcon, 
    InfoButton, 
    UserLabel, } from '../../components'


export const Modal = ({ modalToggle }) => {
    useEffect(() => ModalComp.setAppElement('body'), [])
    // title: "dumbell side bend",
    // exerciseType: "abs",
    // description: "AAAAAAAAAAAAAAAAAA no"

    return (
        <ModalComp isOpen={modalToggle}>
            {/****/}
            <h3>Add Exercise</h3>
            <form>
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
