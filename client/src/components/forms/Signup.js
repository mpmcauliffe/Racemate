import React, { Fragment, useState, useContext, } from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alert/alertContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { Alert } from '../../components'
import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { REGISTER_USER, } from '../../graphql'


export const Signup = ({ opToggle, }) => {
    const { setAlert, } = useContext(AlertContext)
    const client = useApolloClient()

    //const { setAlert, } = alertContext

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    // const [alertState, setAlertState] = useState({
    //     alertText: '',
    //     alertColor: '',
    //     isShown: false,
    // })

    const [signup, { data }] = useMutation(REGISTER_USER)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        if (user.password !== user.password2) {
            console.log('Unmatched passwords!')
            setAlert('Passwords must match!', 'warning')
            return
        }

        const res = await signup({
            variables: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        })
        
        if (!res) {
            console.log('an error occurred at login')
            return
        }

        const token = res.data.createUser.token

        localStorage.setItem('token', token)
        client.writeData({ data: { isLoggedIn: true, userToken: token, } })
    } 

    const { name, email, password, password2, } = user


    return (
        <Fragment>
            <Alert />
            <form onSubmit={onSubmit}>
                <FormContainer>
                    <label htmlFor='name'>Name</label>
                    <input /* NAME */
                        onChange={onChange}
                        value={name}
                        name='name'
                        type='text'
                        required />


                    <label htmlFor='email'>Email</label>
                    <input /* EMAIL */
                        onChange={onChange}
                        value={email}
                        name='email'
                        type='email'
                        required />


                    <label htmlFor='password'>Password</label>
                    <input 
                        onChange={onChange}
                        value={password}
                        name='password'
                        type='password'
                        minLength='6'
                        required />


                    <label htmlFor='password2'>Confirm Password</label>
                    <input 
                        onChange={onChange}
                        value={password2}
                        name='password2'
                        type='password'
                        required />


                    <SubmitButton 
                        type='submit'

                    >   Submit
                    </SubmitButton>

                    <p>Already have an account?
                    <SwitchLink onClick={opToggle}>&nbsp;Login!</SwitchLink></p>
                    
                </FormContainer>
            </form>
        </Fragment>
        
    )
}

Signup.propTypes = {
    opToggle: PropTypes.func,
}
