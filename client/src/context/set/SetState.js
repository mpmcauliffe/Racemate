import React, { useReducer, } from 'react'
import SetContext from './setContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { CREATE_SET, } from '../../graphql'


const SetState = props => {
    const [createSet] = useMutation(CREATE_SET)
    
    const hardSave = async (dataObj) => {
        const { activeId, date, isWeighted, usesDistance, distanceUnit, setUnit, timeDisUnit } = dataObj


        const res = await createSet({
            variables: {
                activeId, 
                date, 
                isWeighted, 
                usesDistance, 
                distanceUnit, 
                setUnit, 
                timeDisUnit,
            }
        })
    }

    return (
        <SetContext.Provider
            value={{
                hardSave,
                }}
        >   {props.children}
        </SetContext.Provider>
    )
}


export default SetState

// 7,625,597,484,987
// TRANSFORMING SET, REPS, WEIGHTS

// TRANSFORMING TIME / DISTANCE
// PREPARING baseSets FOR STORAGE
// given 2d or 1d array
// x = ["8", "8", "8", "8"] 
// y = [[1,2],[3,4],[5,6],[7,8]]

// join at (':')
// a = x.join(':')       >>     "8:8:8:8"
// b = y.join(':')       >>     "1,2:3,4:5,6:7,8"

// reconstitute with split at (':')
// c = a.split(':')      >>     ["8", "8", "8", "8"]
// d = b.split(':')      >>     ["1,2", "3,4", "5,6", "7,8"]

// FOR 2D
// f = d.map(item => [item])        >>         [[1,2],[3,4],[5,6],[7,8]]

// FOR 2D reconstitute again
// g = f.map(item => item[0].split(','))        >>      [[1,2],[3,4],[5,6],[7,8]]


// PREPARING timeDistanceArray FOR STORAGE 
// given array of objects
// x = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }] 

// create 2d array with
// y = x.map((item, i) => Object.keys(item).map(key => [key, item[key]]))
// RETURNS [["x", 1], ["y", 2] ...]

// join array by ':'
// z = y.join(':')
// RETURNS "x,1,y,2:x,3,y,4:x,5,y,6"    << TO GQL SERVER >>

// FOR CLIENT
// split string on ':'
// a = z.split(':')
// RETURNS ["x,1,y,2", "x,3,y,4", "x,5,y,6"]

// rebuild object literals
// b = a.map((unit, i) => ({ x: unit[2], y: unit[6] }))
// RETURNS [{x: "1", y: "2"}, {x: "3", y: "4"}, {x: "5", y: "6"}]    
