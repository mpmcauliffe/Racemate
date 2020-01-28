import React, { Fragment, useState, useContext, } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'

import { UserInfoContainer } from './UserInfoComp'
import { GET_USER_INFO } from '../../../graphql'


export const UserInfo = () => {
    const client            = useApolloClient()
    const { setAlert, }     = useContext(AlertContext)

    return (
        <UserInfoContainer>
            <h1 style={{ color: '#fff', }}>HELLO</h1>
        </UserInfoContainer>
    )
}
