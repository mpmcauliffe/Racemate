import { _setNumberOfSets_, _setRepSelection_, _setWeightSelection_,
    _setRange_, _createInitialObject_, } from './types'

import { buildObject, removeObjKeys, } from '../../helpers'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { // buildObject = (obj, depth, name, value) & removeObjKeys = (obj, newQuantity, name) 
                ...state,
                numberOfSets: action.payload > 0 ? action.payload : '1',
                baseObject: parseInt(action.payload) > Object.keys(state.baseObject).length 
                    ? buildObject(state.baseObject, parseInt(action.payload), 'set', state.rangeValue) 
                    : removeObjKeys(state.baseObject, parseInt(action.payload), 'set')
            }

        case _setRepSelection_: 
            return {
                ...state,
                repSelection: state.optButtonsReps[action.payload],
                repRange: state.repRangeEnum[action.payload],
                defaultStart: state.defaultStartEnum[action.payload],
                rangeValue: state.defaultStartEnum[action.payload]
            }

        case _setWeightSelection_: 
            return {
                ...state,
                weightSelection: !state.weightSelection,
            }
        
        case _setRange_: 
            return {
                ...state,
                rangeValue: action.payload,
            }

        case _createInitialObject_: 
            return { // buildObject = (obj, depth, name, value)
                ...state,
                baseObject: buildObject(state.baseObject, 4, 'set', state.rangeValue)
            }

        default:
            return state
    }
}
