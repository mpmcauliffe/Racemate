import { _setNumberOfSets_, _setWeightSelection_,
    _setRange_, _createInitialObject_, _changeObject_, 
    _setWeightActual_, } from './types'

import { buildObject, removeObjKeys, refillObjValues, } from '../../helpers'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { // buildObject = (obj, depth, name, value) & removeObjKeys = (obj, newQuantity, name) 
                ...state,
                numberOfSets: action.payload > 0 ? action.payload : '1',
                baseObject: parseInt(action.payload) > Object.keys(state.baseObject).length 
                    ? buildObject(state.baseObject, parseInt(action.payload), 'set', state.baseValue) 
                    : removeObjKeys(state.baseObject, parseInt(action.payload), 'set')
            }

        case _setWeightSelection_: 
            return { // refillObjValues = (obj, internalValue)
                ...state,
                weightSelection: !state.weightSelection,
                baseValue: state.weightSelection ? state.fillArray : state.rangeValue,
                // baseObject: Object.keys(state.baseObject).map(set => state.baseValue)
                // baseObject: state.weightSelection 
                //     ? refillObjValues(state.baseObject, [...Array(state.rangeValue).fill(state.startingWeight)]) 
                //     : refillObjValues(state.baseObject, state.realNumberOfReps),
            }
        
        case _setRange_: 
            return {
                ...state,
                rangeValue: action.payload,
            }

        case _createInitialObject_: 
            return { // buildObject = (obj, depth, name, value)
                ...state,
                baseObject: buildObject(state.baseObject, 4, 'set', state.baseValue),
                fillArray: [...Array(parseInt(state.rangeValue)).fill(state.weightValue)]
            }

        case _changeObject_:
            return { // refillObjValues = (obj, size, name, val1, val2, )
                ...state,
                baseObject: refillObjValues(state.baseObject, state.numberOfSets, 'set',  state.rangeValue, state.fillArray),
                weightOption: false,
            }

        case _setWeightActual_:
            return { //obj[key][index]
                ...state,
                baseObject: {
                    ...state.baseObject,
                    [state.baseObject[action.payload.elementKey]]: [state.baseObject[action.payload.elementKey][parseInt(action.payload.arrayLocation)]] = [action.payload.newWeight], 
                    // [
                    //     ...state.baseObject[action.payload.elementKey],
                    //     state.baseObject[action.payload.elementKey][parseInt(action.payload.arrayLocation)] = action.payload.newWeight
                    // ],
                    //...state.baseObject,
                },
                // Object.keys(state.baseObject).map((key, i) => {
                //     console.log(key)
                //     if (key === action.payload.elementKey) {
                //         Object.keys(state.baseObject[action.payload.elementKey]).map((rep, j) => {

                //             if (action.payload.arrayLocation === j.toString()) {
                //                 state.baseObject[action.payload.elementKey][rep] = action.payload.newWeight
                //                 console.log(state.baseObject[action.payload.elementKey][rep])
                //             }
                //             console.log(state.baseObject[action.payload.elementKey])
                //             return state.baseObject[action.payload.elementKey][rep]
                //         })
                //     }
                // }),
                    
                weightOption: true,
            }

        default:
            return state
    }
}
