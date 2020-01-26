import React, { useState, useContext, } from 'react'
import PropTypes from 'prop-types'
import { useHistory, } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { Alert } from '../../components'
import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { LOGIN, } from '../../graphql'


export const Login = ({ opToggle }) => {
    const client            = useApolloClient()
    let history             = useHistory()

    const { setAlert, }     = useContext(AlertContext)
    const [user, setUser]   = useState({
        email: '',
        password: '',
    })

    const [login]           = useMutation(LOGIN)

    
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        const res = await login({
            variables: {
                email: user.email,
                password: user.password,
            },
        })
        
        if (res.data.login.error) {
            setAlert(res.data.login.error, 'warning')
            return
        }

        const token = res.data.login.token

        localStorage.setItem('token', token)
        client.writeData({ data: { isLoggedIn: true, /**userToken: token,**/ } })
    
        history.push('/home')
    }


    return (
        
        <form onSubmit={onSubmit}>
            <Alert />
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
                    required />


                <SubmitButton
                    type='submit'

                >   Submit
                </SubmitButton>

                <p>
                    Don't have an account?
                    <SwitchLink 
                        onClick={() => opToggle('Sign Up')}>
                        &nbsp;Sign up!
                    </SwitchLink>
                </p>
            </FormContainer>
        </form>
    )
}

Login.propTypes = {
    opToggle: PropTypes.func,
}
