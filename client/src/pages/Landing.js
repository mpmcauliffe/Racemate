import React, { useState, useEffect } from 'react'
import { PageContainer, } from './PageComp'
import { Login, Signup, OpSwitch, } from '../components'


const Landing = () => {
    const [formDisplay, setFormDisplay] = useState('Sign Up')
    const optButtons = ['Sign Up', 'Login']

    useEffect(() => {
        // updates form upon user action
    }, [formDisplay])

    const handleToggle = buttonName => {
        setFormDisplay(buttonName)
    }

    return (
        <div>
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
