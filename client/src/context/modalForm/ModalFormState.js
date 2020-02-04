import React from 'react'
import ModalFormContext from './modalFormContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { ADD_EXERCISE, SET_EXERCISE, GET_EXERCISES, } from '../../graphql'


const ModalFormState = props => {
    const [addExercise]                 = useMutation(ADD_EXERCISE) 
    const client                        = useApolloClient()

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


    return (
        <ModalFormContext.Provider
            value={{ submitExercise, }}

        >   {props.children}
        </ModalFormContext.Provider>
    )
}


export default ModalFormState
