import React, { useReducer, } from 'react'
import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import { defaultState } from './initialState'
import { _setNumberOfSets_,  _setWeightSelection_, 
    _setRange_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [state, dispatch] = useReducer(actionReducer, defaultState)


    const updateSetCount = e =>  dispatch({ type: _setNumberOfSets_, payload: e.target.value })
        
    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })

    const updateRange = newRangeValue => dispatch({ type: _setRange_, payload: newRangeValue })
   

    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                rangeValue: state.rangeValue,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                baseSets: state.baseSets,

                updateSetCount,
                updateWeightSelection,
                updateRange,
                 }}
        >   {props.children}
        </ActionModalContext.Provider>
    )
}


export default ActionModalState

//y=x.map(unit => { return [...Array(3).fill(7)] })

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
