import { _setNumberOfSets_, 
    _setRepSelection_, 
    _setWeightSelection_,
    _setRange_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { //[...a, ...[...Array(2)].map(emptySet => { return [...Array(2).fill(8)] })]
                ...state,
                numberOfSets: action.payload,
                baseSets: state.baseSets.length > action.payload 
                    ? state.baseSets.slice(0, action.payload)
                    : [
                        ...state.baseSets, 
                        ...[...Array(action.payload - state.baseSets.length)].map(set => {
                            return [...Array(parseInt(state.rangeValue)).fill('10')]
                        })
                    ]
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

        default:
            return state
    }
}
