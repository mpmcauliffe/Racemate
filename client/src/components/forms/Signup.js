import React, { Fragment, useState, } from 'react'
import { Link } from 'react-router-dom'

import { graphql, } from 'react-apollo'
import { flowRight as compose, } from 'lodash'
import { useMutation, } from '@apollo/react-hooks'

import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { REGISTER_USER, } from '../../graphql'


const Signup = ({ opToggle, }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const [signup, { data }] = useMutation(REGISTER_USER)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        signup({
            variables: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        }).then(resData => console.log(resData))
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
