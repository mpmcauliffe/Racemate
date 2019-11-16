import React, { useContext, } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import AuthContext from '../../context/user/userContext'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext)
    //const { loading, isAuthenticated, } = authContext
    const { isAuthenticated, } = authContext

    console.log(isAuthenticated)
    return (
        <Route 
            { ...rest } 
            render={props => !isAuthenticated //&& !loading 
                ?   (
                        <Redirect to='/login' />
                ) : (
                        <Component { ...props } />
                )
            } />
    )
}


export { PrivateRoute }
