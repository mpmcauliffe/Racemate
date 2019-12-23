import React, { useState, useRef, } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'react-hook-form'

//import { graphql, } from 'react-apollo'
import { useMutation, } from '@apollo/react-hooks'
//import { flowRight as compose, } from 'lodash'

import { FormContainer, SubmitButton } from './FormComp'
import { LOGIN, } from '../../graphql'


const Login = props => {


    const { email, password, handleSubmit, watch, errors } = useForm()

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [login, { data }] = useMutation(LOGIN)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        login({
            variables: {
                email: user.email,
                password: user.password
            }
        }).then(resData => console.log(resData))

        // props.LOGIN({
        //     variables: {
        //         email: user.email,
        //         password: user.password
        //     }
        // }).then(resData => console.log(resData))
    }


    return (
        
        <form>
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
                    onClick={onSubmit}

                >   Submit
                </SubmitButton>

                <p>Don't have an account?
                <Link to='/signup'>&nbsp;Sign up!</Link></p>
            </FormContainer>
        </form>
    )
}


export { Login }
