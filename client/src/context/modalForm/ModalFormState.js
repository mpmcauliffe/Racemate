import React, { useEffect, } from 'react'
import ModalFormContext from './modalFormContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { ADD_EXERCISE, GET_EXERCISES, } from '../../graphql'


const ModalFormState = props => {
    const [addExercise]                 = useMutation(ADD_EXERCISE) 
    const client                        = useApolloClient()

    client.writeData({ data: { isModalEdit: false } })
    client.writeData({ data: { editExerciseId: '' } })


    const submitExercise = async (formData) => {
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
            return res

        } catch (e) {
            console.log(e)
            return null
        }
    }

    const updateExercise = async (formData) => {
        try {
            //const res = await
        } catch (e) {
            console.log(e)
            return null
        }
    }

    const toggleEditOn = () =>  client.writeData({ data: { isModalEdit: true } })    
    const toggleEditOff = () =>  client.writeData({ data: { isModalEdit: false } })    

    const setEditExerciseId = id => client.writeData({ data: { editExerciseId: id } })
    const clearEditExerciseId = () => client.writeData({ data: { editExerciseId: '' } })


    return (
        <ModalFormContext.Provider
            value={{ submitExercise, 
                toggleEditOn,
                toggleEditOff,
                setEditExerciseId,
                clearEditExerciseId, }}

        >   {props.children}
        </ModalFormContext.Provider>
    )
}


export default ModalFormState
