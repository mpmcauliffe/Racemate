import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import AlertContext from '../../../context/alert/alertContext'

import { Alert,
    FormContainer, 
    InfoButton, 
    UserLabel, } from '../..'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EDIT_STATUS, } from '../../../graphql'

import Simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


export const BasicModalForm = () => {
    const client                                   = useApolloClient()

    const { submitExercise, }                      = useContext(ModalFormContext)
    const { setAlert, }                            = useContext(AlertContext)

    const { isModalEdit }                          = client.readQuery({ query: GET_EDIT_STATUS })
    
    const [formData, setFormData]                  = useState({
        title: '',
        exerciseType: '',
        description: ''
    })
    console.log(isModalEdit)
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        // e = [...z, ...[c]] | where z is an array & c is not an array
        const res = submitExercise(formData)
        if (!res) {
            setAlert('Something went wrong', 'warning')
            window.scrollTo(0,0)
            return
        }

        setFormData({                
            title: '',
            exerciseType: '',
            description: ''
        })

        //handleModalToggle()
    }

    const { title, exerciseType, description } = formData

    return (
        <form onSubmit={onSubmit}>
            <Alert style={{ marginTop: '1rem' }} />
            <Simplebar style={{ height: '80vh', marginTop: '29px', }}>
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
            </Simplebar>
        </form>
    )
}
