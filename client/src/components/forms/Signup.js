import React, { Fragment, useState, } from 'react'
import { Link } from 'react-router-dom'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { REGISTER_USER, } from '../../graphql'


const Signup = ({ opToggle, }) => {
    const client = useApolloClient()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const [signup, { data }] = useMutation(REGISTER_USER)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

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
console.log(res)
        const token = res.data.createUser.token

        localStorage.setItem('token', token)
        client.writeData({ data: { isLoggedIn: true, userToken: token, } })
    } 

    const { name, email, password, password2, } = user


    return (
        <Fragment>
            <form>
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
                        required  />


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
                        onClick={onSubmit}

                    >   Submit
                    </SubmitButton>

                    <p>Already have an account?
                    <SwitchLink onClick={opToggle}>&nbsp;Login!</SwitchLink></p>
                    
                </FormContainer>
            </form>
        </Fragment>
        
    )
}


export { Signup }
