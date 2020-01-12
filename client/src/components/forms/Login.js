import React, { useState, } from 'react'
import PropTypes from 'prop-types'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { LOGIN, } from '../../graphql'


export const Login = ({ opToggle, }) => {
    const client = useApolloClient()

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [login, { data }] = useMutation(LOGIN)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        const res = await login({
            variables: {
                email: user.email,
                password: user.password,
            },
        })
        
        if (!res) {
            console.log('an error occurred at login')
            return
        }

        const token = res.data.login.token

        localStorage.setItem('token', token)
        client.writeData({ data: { isLoggedIn: true, userToken: token, } })
    }


    return (
        
        <form onSubmit={onSubmit}>
            <FormContainer>
                <label htmlFor='email'>Email</label>
                <input /* EMAIL */
                    onChange={onChange}
                    value={user.email}
                    name='email'
                    type='email'
                    required />
                

                <label htmlFor='password'>Password</label>
                <input /* PASSWORD */
                    onChange={onChange}
                    value={user.password}
                    name='password'
                    type='password'
                    minLength='6'
                    required />


                <SubmitButton
                    // onClick={onSubmit}
                    type='submit'

                >   Submit
                </SubmitButton>

                <p>Don't have an account?
                <SwitchLink onClick={opToggle}>&nbsp;Sign up!</SwitchLink></p>
            </FormContainer>
        </form>
    )
}

Login.propTypes = {
    opToggle: PropTypes.func,
}
