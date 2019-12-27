import React, { useState, useRef, } from 'react'
import { Link } from 'react-router-dom'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'

import { FormContainer, SubmitButton, SwitchLink, } from './FormComp'
import { LOGIN, } from '../../graphql'


const Login = ({ opToggle, }) => {
    const client = useApolloClient()

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [login, { data }] = useMutation(LOGIN)

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        //console.log(login.onCompleted)
        //  
        const res = await login({
            variables: {
                email: user.email,
                password: user.password,
            },
        })
        //console.log(res.data.login.token)
        if (!res) {
            console.log('an error occurred at login')
            return
        }
        console.log(res)
        const token = res.data.login.token

        localStorage.setItem('token', token)
        client.writeData({ data: { isLoggedIn: true } })


        //console.log(client.readData())
    
        //     const token = resData.data.login.token
        //     console.log('inside login')

        //     localStorage.setItem('token', token)
        //     console.log(client)
            //client.writeData({ data: { isLoggedIn: true } })
            //
        // })

        // onCompleted({ login }) {
        //     console.log(login)
        //     //
        // }
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
                <SwitchLink onClick={opToggle}>&nbsp;Sign up!</SwitchLink></p>
            </FormContainer>
        </form>
    )
}


export { Login }
