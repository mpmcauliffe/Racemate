  
import { _setNumberOfSets_, _setWeightSelection_,
    _setRange_,  _initiateWeightlessArray_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { //[...a, ...[...Array(2)].map(emptySet => { return [...Array(2).fill(8)] })]
                ...state,
                numberOfSets: action.payload > 0 ? action.payload : '1',
                baseSets: state.baseSets.length > action.payload 
                    ? state.baseSets.slice(0, action.payload)
                    : [
                        ...state.baseSets, 
                        ...[...Array(action.payload - state.baseSets.length)].map(set => {
                            return [...Array(parseInt(state.rangeValue)).fill('10')]
                        })
                    ]
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

        // case _initiateWeightlessArray_:
        //     return { //[...Array(4)].map(set => startingWeight)
        //         ...state, 
        //         baseSets: [...Array(parseInt(state.numberOfSets)).fill(state.averageNumberOfReps)]
        //     }

        default:
            return state
    }
}
