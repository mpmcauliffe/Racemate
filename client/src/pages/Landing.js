import React, { useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { PageContainer, } from './PageComp'
import { Banner, Login, Signup, OpSwitch, } from '../components'
import { IS_LOGGED_IN } from '../graphql'


const Landing = props => {
    let history                             = useHistory()
    
    const [formDisplay, setFormDisplay]     = useState('Sign Up')
    const optButtons                        = ['Sign Up', 'Login']
    const { data }                          = useQuery(IS_LOGGED_IN)

    
    useEffect(() => {
        if (data.isLoggedIn) {
            history.push('/home')
        }

    // updates form upon user action
    }, [history, data.isLoggedIn, formDisplay])

    const handleToggle = buttonName => {
        setFormDisplay(buttonName)
    }

    return (
        <div>
            <Banner />

            <PageContainer>
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            </PageContainer>
            
            {formDisplay === 'Sign Up'
                ? (
                    <Signup 
                        opToggle={handleToggle} />
                ) : (
                    <Login 
                        opToggle={handleToggle} />
                )
            }          
        </div>
    )
}


export { Landing }
