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

    const [showBasicUpdate, setShowBasicUpdate] = useState(false)

    
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
            <InfoSection style={{ marginLeft: '2rem', }}>
                <LogoutButton />
            </InfoSection>
                
            <UserInfoContainer>
                <InfoSection>
                    <div>
                        <InfoText>Name: {me.name}</InfoText>
                        <InfoText>Email: {me.email}</InfoText>
                    </div>
                    <InfoIcon 
                        className='far fa-edit'
                        onClick={() => setShowBasicUpdate(!showBasicUpdate)} />
                </InfoSection>
                    {showBasicUpdate && <UserBasic user={me} />}
                    
                <InfoSection>
                    <UserInfoPassword />
                </InfoSection>
            </UserInfoContainer>
        </Fragment>
        
    )
}
