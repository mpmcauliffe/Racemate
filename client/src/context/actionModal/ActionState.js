import React, { useReducer, } from 'react'
import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import { defaultState } from './initialState'
import { _setNumberOfSets_, _setWeightSelection_, 
    _setRange_, _setIndividualRep_, _createInitialObject_,
    _changeObject_, _setWeightActual_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */

    //const initialState = defaultState
    const [state, dispatch] = useReducer(actionReducer, defaultState)


    const updateSetCount = e =>  e.target.value > 0 ? dispatch({ type: _setNumberOfSets_, payload: e.target.value }) : -1
        
    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })

    const updateRange = newRangeValue => dispatch({ type: _setRange_, payload: newRangeValue })
   
    const updateIndividualRep = newRepValue => dispatch({ type: _setIndividualRep_, payload: newRepValue })

    const createInitialObject = () => dispatch({ type: _createInitialObject_ })

    const changeObject = () => dispatch({ type: _changeObject_ })

    const updateWeightActual = (name, newWeight) => {
        //obj[key][index]
        //["set_1_0"] "11"
        //tabId = id.split("_").pop()
//         var str = "Hello world!";
// var res = str.substring(1, 4)
        const elementKey = name[0].substring(0, 5) 
        const arrayLocation = name[0].split('-').pop()
        
        
        dispatch({ type: _setWeightActual_, payload: { elementKey, arrayLocation, newWeight } })
    }


    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: state.numberOfSets,
                rangeValue: state.rangeValue,
                weightSelection: state.weightSelection,
                optButtonsWeight: state.optButtonsWeight,
                startingWeight: state.startingWeight,
                repSteps: state.repSteps,
                baseObject: state.baseObject,
                baseValue: state.baseValue,
                weightValue: state.weightValue,
                weightOption: state.weightOption,

                updateSetCount,
                updateWeightSelection,
                updateRange,
                createInitialObject,
                changeObject,
                updateWeightActual,
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
