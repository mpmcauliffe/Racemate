import React, { useReducer, } from 'react'

import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import timeReducer from './timeReducer'
import { defaultState } from './initialState'

import { // ACTION STATE 
    _setNumberOfSets_,  _setWeightSelection_,  _setRange_, 
    _changeToWeightedArray_, _changeToWeightless_, _updateWeightInput_, 
    _optionUpdateRepsCount_, _optionWeightLocal_, _optionWeightGlobal_, 
    _updateDate_, _resetState_, 
    // TIME STATE
    _setDistanceTrigger_} from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [actionState, dispatch] = useReducer(actionReducer, defaultState)
    const [timeState, timeDispatch] = useReducer(timeReducer, defaultState)

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

    // OPTIONS TO UPDATE SETS AND REPS APPEAR WITHIN INDIVIDUAL SETS WHEN CHANGES ARE DETECTED
    const triggerOptionReps = startingLocation => dispatch({ type: _optionUpdateRepsCount_, payload: startingLocation })
    // UPDATE WEIGHT IN SINGLE SET
    const triggerWeightLocal = startingLocation => dispatch({ type: _optionWeightLocal_, payload: startingLocation })
    // UPDATE WEIGHT IN ALL SETS
    const triggerWeightGlobal = startingLocation => dispatch({ type: _optionWeightGlobal_, payload: startingLocation })
    
    // this is a failsafe for componentWillUnmount()
    // when the modal is closed this will reselt current state to default state
    // THIS IS IN PLACE UNTIL I FIND ANOTHER ALTERNATIVE TO THE PROBLEM
    const triggerReset = () => dispatch({ type: _resetState_ })

    //** TIME STATE **//
    // UPDATE DATE
    const updateDate = newDate => timeDispatch({ type: _updateDate_, payload: newDate })

    const updateDistanceTrigger = () => timeDispatch({ type: _setDistanceTrigger_ })

    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: actionState.numberOfSets,
                repValue: actionState.repValue,
                weightSelection: actionState.weightSelection,
                changeOptionBin: actionState.changeOptionBin,
                baseSets: actionState.baseSets,
                spoolInputArray: actionState.spoolInputArray,
                changeOptionReps: actionState.changeOptionReps,
                changeOptionWeight: actionState.changeOptionWeight,
                currentWeight: actionState.currentWeight,

                hoursMinutes: timeState.hoursMinutes,
                manualTime: timeState.manualTime,
                timeDistanceArray: timeState.timeDistanceArray,
                isDistanceExercise: timeState.isDistanceExercise,
                optBtnDistanceUnit: timeState.optBtnDistanceUnit,
                date: timeState.date,
                

                updateSetCount,
                updateWeightSelection,
                updateRange,
                changeToWeightless,
                changeToWeightedArray,
                updateWeightInput,
                triggerOptionReps,
                triggerWeightLocal,
                triggerWeightGlobal,
                triggerReset,

                updateDistanceTrigger,
                updateDate,
                 }}
        >   {props.children}
        </ActionModalContext.Provider>
    )
}


export default ActionModalState
