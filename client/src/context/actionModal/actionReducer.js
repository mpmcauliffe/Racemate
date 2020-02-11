import { _setNumberOfSets_, 
    _setRepSelection_, 
    _setWeightSelection_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return {
                ...state,
                numberOfSets: action.payload,
            }

        case _setRepSelection_: 
            return {
                ...state,
                repSelection: state.optButtonsReps[action.payload],
                repRange: state.repRangeEnum[action.payload],
                defaultStart: state.defaultStartEnum[action.payload],
            }

        case _setWeightSelection_: 
            return {
                ...state,
                weightSelection: !state.weightSelection,
            }

        default:
            return state
    }
}
