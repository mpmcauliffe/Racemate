import React, { useReducer, } from 'react'
import OpSwitchContext from './opSwitchContext'
import { HANDLE_CLICK, GET_ACTIVE, } from './types'


export const OpSwitchState = () => {
    const initialState = {
        items: [ ],
        active: 0,
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    


    return (
        <OpSwitchContext.Provider


        >   {props.children}
        </OpSwitchContext.Provider>
    )
}
