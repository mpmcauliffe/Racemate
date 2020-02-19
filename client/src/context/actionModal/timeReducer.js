import { buildTimeString } from '../../helpers'

import {  _updateDate_, _setDistanceTrigger_, _addTimeDisItem_,
    _updateTime_, } from './types'

export default (state, action) => {
    let unitTime
    let unitDistance
    let location
    let time
    let distance
    let dim
    let name

    switch(action.type) {
        case _updateTime_:
            // {name: "hrs_0", timeUnit: "4"}

            [unitTime, location, dim] = action.payload.name.split('_')
            time = action.payload.timeValue
            console.log(unitTime, location, time)

            return { //buildTimeString = (timeValue, mod, timeArr)
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray.map((obj, i) => parseInt(location) === i 
                        ? dim === 'T' ? { ...obj, time: buildTimeString(time, unitTime, obj.time) } : { obj, distance: 'Sedna' }
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

        case _updateDate_:
            return {
                ...state,
                date: action.payload,
            }

        default:
            return state
    }

}