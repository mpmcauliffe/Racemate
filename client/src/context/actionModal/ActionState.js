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
    const [state, dispatch] = useReducer(actionReducer, defaultState)


    const updateSetCount = e =>  dispatch({ type: _setNumberOfSets_, payload: e.target.value })
        
    const updateRepSelection = repSelectionIndex => dispatch({ type: _setRepSelection_, payload: repSelectionIndex })

    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })


    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                repSelection: state.repSelection,
                optButtonsReps: state.optButtonsReps,
                repRange: state.repRange,
                repRangeEnum: state.repRangeEnum,
                defaultStart: state.defaultStart,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                startingWeight: state.startingWeight,
                repSteps: state.repSteps,
            
                updateSetCount,
                updateRepSelection,
                updateWeightSelection,
                 }}
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
//     defaultStart: '8',
//     defaultStartEnum: ['8', '12', '30'],

//     weightSelection: false,
//     optButtonsWeight: ['no', 'yes'],

//     startingWeight: '10'
//     repSteps: '2.5'
// }
