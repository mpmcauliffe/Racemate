import { buildTimeString } from '../../helpers'

import {  _updateDate_, _setDistanceTrigger_, _addTimeDisItem_,
    _setTimeOrDis_, _setDistanceTag_, } from './types'

export default (state, action) => {
    let unit
    let unitDistance
    let location
    let updatedValue
    let dim
    let name

    switch(action.type) {
        case _setTimeOrDis_:
            [unit, location, dim] = action.payload.name.split('_')
            updatedValue = action.payload.newValue
    
            return { //buildTimeString = (timeValue, mod, timeArr)
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray.map((obj, i) => parseInt(location) === i 
                        ? dim === 'T' 
                            ? { ...obj, time: buildTimeString(updatedValue, unit, obj.time) } 
                            : { ...obj, distance: `${updatedValue} ${unit}` }
                        : obj
                )],
            }

        case _addTimeDisItem_:
            return {
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray, 
                    ...Array(1).fill({ 
                        time: state.timeStrArr.join(':'), 
                        distance: '', 
                    })
                ]
            }

        case  _setDistanceTrigger_:
            return {
                ...state,
                isDistanceExercise: !state.isDistanceExercise
            }

        case _setDistanceTag_: 
        console.log(action.payload)
            return {
                ...state,
                distUnitSelction: action.payload
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