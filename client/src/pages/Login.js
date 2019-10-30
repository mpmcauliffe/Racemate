import React, { useState, } from 'react'


const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })


    return (
        <div>
            <h1>LOGIN</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input /* EMAIL */
                    onChange={onChange}
                    value={user.email}
                    name='email'
                    type='email'
                    required 

                    className='form-control form-control-lg' />

                <label htmlFor='password'>Password</label>
                <input /* PASSWORD */
                    onChange={onChange}
                    value={user.password}
                    name='password'
                    type='password'
                    minLength='6'
                    required

                    className='form-control form-control-lg' />

                {/* <Button 
                    onClick={onSubmit}
                    style={styles.button}

                >   Submit
                </Button> */}
            </form>
        </div>
    )
}


export { Login }
