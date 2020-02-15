import React, { useReducer, } from 'react'
import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import { defaultState } from './initialState'
import { _setNumberOfSets_,  _setWeightSelection_,  _setRange_, 
    _changeToWeightedArray_, _changeToWeightless_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [state, dispatch] = useReducer(actionReducer, defaultState)

    const updateSetCount = e => {
        if (e.target.value > 0) {
            dispatch({ type: _setNumberOfSets_, payload: e.target.value })
        }
    } 
        
    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })

    const updateRange = (name, newRepValue) => {
        //if (newRepValue > 0 && newRepValue < 51) {
            dispatch({ type: _setRange_, payload: { name, newRepValue } })
        //}
    }

    const changeToWeightedArray = () => dispatch({ type: _changeToWeightedArray_ })
   
    const changeToWeightless = () => dispatch({ type: _changeToWeightless_ })

    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                repValue: state.repValue,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                baseSets: state.baseSets,

                updateSetCount,
                updateWeightSelection,
                updateRange,
                changeToWeightless,
                changeToWeightedArray,
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
