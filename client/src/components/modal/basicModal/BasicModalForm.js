import React, { useState, useEffect, useContext, } from 'react'
import ModalFormContext from '../../../context/modalForm/modalFormContext'
import AlertContext from '../../../context/alert/alertContext'

import { Alert,
    FormContainer, 
    InfoButton, 
    UserLabel, } from '../..'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EDIT_STATUS, GET_EDIT_ID, GET_EXERCISES, } from '../../../graphql'

import Simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


export const BasicModalForm = ({ handleModalToggle }) => {
    const client                        = useApolloClient()

    const { submitExercise,
         editExercise, 
         deleteExercise, }              = useContext(ModalFormContext)
    const { setAlert, }                 = useContext(AlertContext)

    const { isModalEdit }               = client.readQuery({ query: GET_EDIT_STATUS })
    const { editExerciseId }            = client.readQuery({ query: GET_EDIT_ID })
    
    const [formData, setFormData]       = useState({                
        title: '',
        exerciseType: '',
        description: '',
        id: ''
    })

    useEffect(() => {
        if (isModalEdit) {
            const myExercises = client.readQuery({ query: GET_EXERCISES, })
            const editExercise = myExercises.myExercises.filter(exercise => exercise.id === editExerciseId)

            setFormData(editExercise[0])
        } 
    }, [isModalEdit, client, editExerciseId])

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        let res
        if (isModalEdit) {
            res = editExercise(formData)
        } else {
            res = submitExercise(formData)
        }
        
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

        handleModalToggle()
    }

    const onDeleteClick = e => {
        e.preventDefault()

        const res = deleteExercise(formData.id)

        if (!res) {
            setAlert('Something went wrong', 'warning')
            return
        }

        setAlert('Exercise deleted')
        handleModalToggle()
    }

    const { title, exerciseType, description } = formData

    return (
        <form onSubmit={onSubmit}>
            <Alert style={{ marginTop: '1rem' }} />
            <Simplebar style={{ height: '80vh', marginTop: '29px', overflowX: 'hidden' }}>
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
                    > {isModalEdit ? 'Update Exercise' : 'Add Exercise'}
                    </InfoButton>

                    {isModalEdit && 
                        <InfoButton
                            style={{ color: '#FF5E5E', border: '.2rem solid #FF5E5E' }}
                            onClick={onDeleteClick}
                            wide 
                        > Delete Exercise
                        </InfoButton>
                    }
                </FormContainer>
            </Simplebar>
        </form>
    )
}