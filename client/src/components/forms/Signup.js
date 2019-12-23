import React, { Fragment, useState, } from 'react'
import { Link } from 'react-router-dom'

import { graphql, } from 'react-apollo'
import { flowRight as compose, } from 'lodash'

//import { Login, } from '../pages'
//import { Nav, } from '../components'
import { FormContainer, SubmitButton, } from './FormComp'
import { REGISTER_USER, } from '../../graphql'


const SignupComp = props => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        props.REGISTER_USER({
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
                    <Link to='/login'>&nbsp;Login!</Link></p>
                    
                </FormContainer>
            </form>
        </Fragment>
        
    )
}

const Signup = compose(
    graphql(REGISTER_USER, { name: 'REGISTER_USER' })
)(SignupComp)


export { Signup }


// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" })
// )(AddBook);
