import React, { useReducer, } from 'react'

import SetContext from './setContext'


const SetState = props => {


    return (
        <SetContext.Provider
        >   {props.children}
        </SetContext.Provider>
    )
}


export default SetState
