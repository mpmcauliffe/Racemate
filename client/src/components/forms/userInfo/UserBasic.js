import React, { useState, useContext, } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { FormContainer, UserLabel, InfoButton, } from '../FormComp'
import { Alert, } from '../../../components'

import { UPDATE_USER } from '../../../graphql'


export const UserBasic = ({ user }) => {
    const { setAlert, }         = useContext(AlertContext)
    const [makeUpdate]          = useMutation(UPDATE_USER)

    const [updateUser, setUpdateUser] = useState({
        name: user.name,
        email: user.email,
    })

    const onChange = e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        if (updateUser.name === '' || updateUser.email === '') {
            setAlert('Name and email are required', 'warning')
            return
        }

        const res = await makeUpdate({
            variables: {
                name: updateUser.name,
                email: updateUser.email,
            }
        })

        const { message } = res.data.updateUser
        if (message === 'Invalid email' || message === 'User not found') {
            setAlert(message, 'warning')
            return
        }

        setAlert(message)
    }

    const { name, email, } = updateUser

    return (
        <form>
            <Alert />
            <FormContainer>
                <UserLabel htmlFor='name'>Name</UserLabel>
                <input /* NAME */
                    onChange={onChange}
                    value={name}
                    name='name'
                    type='text' />


                <UserLabel htmlFor='email'>Email</UserLabel>
                <input /* EMAIL */
                    onChange={onChange}
                    value={email}
                    name='email'
                    type='email' />
                    
                <InfoButton 
                    onClick={onSubmit}
                > Update Information
                </InfoButton>
            </FormContainer>
            
        </form>
    )
}
