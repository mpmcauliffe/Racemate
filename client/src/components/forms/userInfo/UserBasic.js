import React, { useState, useContext, } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { FormContainer, } from '../FormComp'
import { FooterContainer } from '../../footer/FooterComp'


export const UserBasic = () => {
    const { setAlert, }         = useContext(AlertContext)

    const [updateUser, setUpdateUser] = useState({
        name: '',
        email: '',
    })

    const onSubmit = e => {
        console.log('update user')
    }

    return (
        <form onSubmit={onSubmit}>
            <FooterContainer>
                <label htmlFor='name'>Name</label>
                <input /* NAME */
                    //onChange={onChange}
                    //value={name}
                    name='name'
                    type='text'
                    required />


                <label htmlFor='email'>Email</label>
                <input /* EMAIL */
                    //onChange={onChange}
                    //value={email}
                    name='email'
                    type='email'
                    required />
            </FooterContainer>
        </form>
    )
}
