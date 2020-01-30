import React, { Fragment, useState, useContext, } from 'react'
import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import AlertContext from '../../../context/alert/alertContext'

import { InfoButton, 
    UserLabel, 
    InfoSection, } from './UserInfoComp'
import { FormContainer, } from '../FormComp'
import { Alert, } from '../../../components'


export const UserInfoPassword = () => {
    const client            = useApolloClient()
    const { setAlert, }     = useContext(AlertContext)

    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const [userPassword, setUserPassword]         = useState({
        currentPassword: '',
        newPassword: '',
        newPassword2: '',
    })
    const { currentPassword, newPassword, newPassword2, } = userPassword

    const onChange = e => setUserPassword({ ...userPassword, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        if (currentPassword === '' || newPassword === '' || newPassword2 === '') {
            setAlert('All fields are required', 'warning')
            return
        }
        if (newPassword.length < 6) {
            setAlert('A password must have at least 6 characters', 'warning')
            return
        }
        if (newPassword !== newPassword2) {
            setAlert('"New Password" and "Confirm Password" must match', 'warning')
            return
        }
    }

    return (
        <Fragment>
            <InfoSection>
                <InfoButton 
                    onClick={() => setShowPasswordForm(!showPasswordForm)}

                    style={{ width: '70%', 
                        margin: '5rem auto 1rem auto' }} 
                > Change Password
                </InfoButton>
            </InfoSection>
            
            {showPasswordForm &&
                <form>
                    <Alert />
                    <FormContainer>
                        <UserLabel htmlFor='password'>Current Password</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={currentPassword}
                            minLength='6'
                            name='currentPassword'
                            type='password' />

                        <UserLabel htmlFor='password'>New Password ... 6 character minimum</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={newPassword}
                            minLength='6'
                            name='newPassword'
                            type='password' />

                        <UserLabel htmlFor='password'>Confirm Password</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={newPassword2}
                            minLength='6'
                            name='newPassword2'
                            type='password' />

                        <InfoButton 
                            onClick={onSubmit}
                        > Update Password
                        </InfoButton>
                    </FormContainer>
                </form>
            }
        </Fragment>
        
    )
}
