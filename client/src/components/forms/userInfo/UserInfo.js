import React, { Fragment, useState, useContext, } from 'react'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'

import { UserInfoContainer, 
    InfoSection, 
    InfoText, 
    InfoIcon, } from './UserInfoComp'
import { LogoutButton,
    UserBasic,
    UserInfoPassword, } from '../userInfo'

import { GET_USER_INFO } from '../../../graphql'


export const UserInfo = () => {
    const client                = useApolloClient()
    const { loading, data, }    = useQuery(GET_USER_INFO)

    
    if (loading && !data) {
        return  <InfoText
                    style={{ marginTop: '10rem',
                        textAlign: 'center', }} >
                    Loading . . .
                </InfoText>
    }

    const { me } = data
    
    return (
        <Fragment>
            <InfoSection>
                <LogoutButton />
            </InfoSection>
                
            <UserInfoContainer>
                <InfoSection>
                    <div>
                        <InfoText>Name: {me.name}</InfoText>
                        <InfoText>Email: {me.email}</InfoText>
                    </div>
                    <InfoIcon className='far fa-edit'></InfoIcon>
                </InfoSection>

                <InfoSection>
                    <UserInfoPassword />
                </InfoSection>
            </UserInfoContainer>
        </Fragment>
        
    )
}
