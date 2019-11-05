import React, { useState, } from 'react'
import { FormContainer, SubmitButton } from '../../styled-components'


const Login = props => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })


    return (
        <div className='form-container'>
            <form className='form-container'>

                <label htmlFor='email' className='form-label'>Email</label>
                <input /* EMAIL */
                    onChange={onChange}
                    value={user.email}
                    name='email'
                    type='email'
                    required 

                    className='form-control form-control-lg' />

                

                <label htmlFor='password' className='form-label'>Password</label>
                <input /* PASSWORD */
                    onChange={onChange}
                    value={user.password}
                    name='password'
                    type='password'
                    minLength='6'
                    required

                    className='form-control form-control-lg' />

                <SubmitButton
                    //onClick={onSubmit}
                    //style={styles.button}

                >   Submit
                </SubmitButton>
            </form>
        </div>
    )
}


export { Login }
