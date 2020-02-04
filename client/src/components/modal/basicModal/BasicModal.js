import React, { useState, useEffect, useContext, } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import ReactModal from 'react-modal'
import Simplebar from 'simplebar-react'

import { ModalTitle, 
    FooterIcon,
    ModalCloseButton, 
    modalContent, } from '../ModalComp' 
import { 
    Alert,
    FormContainer, 
    InfoIcon, 
    InfoButton, 
    UserLabel, } from '../..'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { ADD_EXERCISE, SET_EXERCISE, GET_EXERCISES, } from '../../../graphql'

import 'simplebar/dist/simplebar.min.css'


export const BasicModal = props => {
    const [modalToggle, setModalToggle] = useState(false)
    const [addExercise]                 = useMutation(ADD_EXERCISE) 
    const [setExercise]                 = useMutation(SET_EXERCISE) 
    const { setAlert, }                 = useContext(AlertContext)
    const client                        = useApolloClient()


    const [formData, setFormData]       = useState({
        title: '',
        exerciseType: '',
        description: ''
    })

    useEffect(() => ReactModal.setAppElement('body'), [])
    
    const handleModalToggle = () => setModalToggle(!modalToggle)
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        try {
            const res = await addExercise({
                variables: {
                    title: formData.title,
                    exerciseType: formData.exerciseType,
                    description: formData.description,
                },
                update: async (cache, mutationResult) => {
                    const newExercise = mutationResult.data.createExercise
                    const exercises = await cache.readQuery({ query: GET_EXERCISES })
                    
                    client.writeData({ data: { myExercises: [...exercises.myExercises, ...[newExercise]], } })
                }
            })
            // e = [...z, ...[c]] | where z is an array & c is not an array

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


        } catch (e) {
            console.log(e)
        }
    }

    if (!modalToggle) {
        return (
            <div onClick={handleModalToggle}>
                {props.children} 
            </div>
        )
    }

    const { title, exerciseType, description } = formData

    return (
        
        <ReactModal 
            isOpen={modalToggle}
            style={{ overlay: { zIndex: '5000', },
                content: modalContent.modalFrame }}>
            {props.children.props.editId && <div>{props.children.props.editId}</div>}
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
        </ReactModal>
        
    )
}
