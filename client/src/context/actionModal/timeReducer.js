
import {  _updateDate_, _setDistanceTrigger_, } from './types'

export default (state, action) => {
    switch(action.type) {

        case  _setDistanceTrigger_:
            return {
                ...state,
                isDistanceExercise: !state.isDistanceExercise
            }

        case _updateDate_:
            return {
                ...state,
                date: action.payload,
            }

        default:
            return state
    }

}