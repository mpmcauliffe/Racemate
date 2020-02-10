import { _setNumberOfSets_, 
    _setRepSelection_, 
    _setWeightSelection_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setRepSelection_: 
            return {
                ...state,
                repRange: state.repRangeEnum[action.payload],
                defaultStart: state.defaultStartEnum[action.payload],
            }

        default:
            return state
    }
}

//     repSelection: 'low'
//     optButtonsReps: ['low', 'medium', 'high'],
//     repRange: '4-8',
//     repRangeEnum: ['4-8', '9-18', '19-50'],
//     defaultStart: '8',
//     defaultStartEnum: ['8', '12', '30'],