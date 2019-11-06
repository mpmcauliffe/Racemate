import React, { useState, } from 'react'
import { FormContainer, SubmitButton } from '../styled-components'


const Login = props => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })


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
                    //onClick={onSubmit}
                    //style={styles.button}

                >   Submit
                </SubmitButton>
            </FormContainer>
        </form>
        
    )
}


export { Login }
