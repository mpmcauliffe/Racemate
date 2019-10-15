const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
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
        const { exercise, date, reps, weight, distance, time, } = args.data
        
        const exerciseExists = await Exercise.findById({ _id: exercise, })
        if (!exerciseExists) {
            throw new Error('Sets cannot be added to exercise!')
        }

        console.log(exerciseExists)

        const exercise = new Exercise({
            exercise,
            date,
            reps,
            weight,
            distance,
            time,
        })
    },
}


module.exports = setResolver
