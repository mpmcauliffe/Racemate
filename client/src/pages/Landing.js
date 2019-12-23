import React, { useState, } from 'react'
//import { Link } from 'react-router-dom'
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
            <OpSwitch 
                opOne='Sign Up'
                opTwo='Login'
                setting={opSwitchSetting}
                opToggle={handleOpClickSetting} />

            {opSwitchSetting ? <Signup /> : <Login />}          
        </div>
    )
}


export { Landing }
