import React, { useReducer, } from 'react'
import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import { defaultState } from './initialState'
import { _setNumberOfSets_, _setRepSelection_, _setWeightSelection_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [state, displatch] = useReducer(actionReducer, defaultState)

    //const handleSetChange = e => changeSetCount(e.target.value)
    //     repSelection: 'low'
    //     optButtonsReps: ['low', 'medium', 'high'],
    //     repRange: '4-8',
    //     repRangeEnum: ['4-8', '9-18', '19-50'],
    //     defaultStart: ['8', '12', '30'],

    const setRepSelection = repSelectionInput => {
        //beasts.indexOf('bison')
        
    }


    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                repSelection: state.repSelection,
                optButtonReps: state.optButtonReps,
                repRange: state.repRange,
                repRangeEnum: state.repRangeEnum,
                defaultStart: state.defaultStart,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                startingWeight: state.startingWeight,
                repSteps: state.repSteps, }}
        >   {props.children}
        </ActionModalContext.Provider>
    )
}


export default ActionModalState


// export const initialState = {
//     numberOfSets: '4',

//     repSelection: 'low'
//     optButtonsReps: ['low', 'medium', 'high'],
//     repRange: '4-8',
//     repRangeEnum: ['4-8', '9-18', '19-50'],
//     defaultStart: ['8', '12', '30'],

//     weightSelection: false,
//     optButtonsWeight: ['no', 'yes'],

//     startingWeight: '10'
//     repSteps: '2.5'
// }
