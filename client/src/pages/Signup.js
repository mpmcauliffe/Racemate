import React, { useState, } from 'react'
import { Route, Switch } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { Login, } from '../pages'
import { Nav, } from '../components'
import { FormContainer, SubmitButton, } from '../styled-components'


const Signup = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const { name, email, password, password2, } = user


    return (
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
                    //onClick={onSubmit}

                >   Submit
                </SubmitButton>
            </FormContainer>
        </form>
    )
}


export { Signup }
