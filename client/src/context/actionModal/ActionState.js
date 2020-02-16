import React, { useReducer, } from 'react'
import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import { defaultState } from './initialState'
import { _setNumberOfSets_,  _setWeightSelection_,  _setRange_, 
    _changeToWeightedArray_, _changeToWeightless_, _updateWeightInput_, 
    _optionUpdateRepsCount_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [state, dispatch] = useReducer(actionReducer, defaultState)

    // NUMBER OF SETS
    const updateSetCount = e => dispatch({ type: _setNumberOfSets_, payload: e.target.value }) 
    
    // CHOICE BETWEEN WEIGHTLESS AND WEIGHTED EXERCISE
    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })
    // UPDATE ARRAY TO INCLUDE VALUES FOR WEIGHTED REPS ... 2D ARRAY
    const changeToWeightedArray = () => dispatch({ type: _changeToWeightedArray_ })
    // UPDATE ARRAY FOR WEIGHTLESS REPS ... 1D ARRAY
    const changeToWeightless = () => dispatch({ type: _changeToWeightless_ })

    // NUMBER OF REPS ... IN INDIVIDUAL SETS
    const updateRange = (name, newRepValue) => dispatch({ type: _setRange_, payload: { name, newRepValue } })
    // WEIGHT QUANTITY PER REP
    const updateWeightInput = (name, newWeightValue) => {
        // NAME FORMAT: weightInput_i-j
        const coordYX   = name.split('_')[1].split('-')
        const yCoord    = parseInt(coordYX[0])
        const xCoord    = parseInt(coordYX[1])

        dispatch({ type: _updateWeightInput_, payload: { xCoord, yCoord, newWeightValue } })
    }

    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                repValue: state.repValue,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                baseSets: state.baseSets,
                spoolInputArray: state.spoolInputArray,
                changeOption: state.changeOption,

                updateSetCount,
                updateWeightSelection,
                updateRange,
                changeToWeightless,
                changeToWeightedArray,
                updateWeightInput,
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
