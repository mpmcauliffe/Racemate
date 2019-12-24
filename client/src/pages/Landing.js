import React, { useState, } from 'react'
import { PageContainer, } from './PageComp'
import { Login, Signup, OpSwitch, } from '../components'


const Landing = () => {
    const [opSwitchSetting, setOpSwitchSetting] = useState(true)

    /* handle Login/Signup opSwitch */
    const handleOpClickSetting = e => {
        e.preventDefault()
        
        setOpSwitchSetting(!opSwitchSetting)
    }

    return (
        <div>
            <PageContainer>
            <OpSwitch 
                opOne='Sign Up'
                opTwo='Login'
                setting={opSwitchSetting}
                opToggle={handleOpClickSetting} />
            </PageContainer>
            

            {opSwitchSetting 
                ? (
                    <Signup 
                        opToggle={handleOpClickSetting} />
                ) : (
                    <Login 
                        opToggle={handleOpClickSetting} />
                )
            }          
        </div>
    )
}


export { Landing }
