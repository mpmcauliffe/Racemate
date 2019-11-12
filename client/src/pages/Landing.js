import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}


export { Landing }
