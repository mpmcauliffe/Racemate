const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const SetSchema             = require('../../models/SetSchema')                   
const getUserId             = require('../../helpers/getUserId')


const setResolver = {
    async createSet(args, { headers }) {
    // exercise: String!
    // date: String!
    // reps: String
    // weight: String
    // distance: Float
    // time: Float
        const userId = getUserId(headers.authorization)
        const { exerciseId, date, reps, weight, distance, time, } = args.data


        let exercise = await Exercise.findById({ _id: exerciseId, })
        if (!exercise || exercise.owner.toString() !== userId) {
            throw new Error('Sets cannot be added to exercise!')
        }

        const set = {
            date,
            reps: reps.split(' '),
            weight: weight.split(' '),
            distance,
            time,
        }
        let { sets } = exercise
        sets.push(set)
        //console.log(sets)

        exercise = await Exercise.findByIdAndUpdate(
            exerciseId,
            { $set: { sets } },
            { new: true }
        )
        console.log(exercise)
        return newSet
    },
}


module.exports = setResolver
