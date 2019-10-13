const getUserId             = require('../../helpers/getUserId')
const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const transformUser         = require('./utils/userTransform')
const transformExercise     = require('./utils/exerciseTransform')


const Query = {
    users: async () => {
        try {
            users = await User.find()

            return users.map(user => transformUser(user))

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    me: async (args, { headers }) => {
        try {
            const userId = getUserId(headers.authorization)

            const user = await User.findById({ _id: userId })
            return transformUser(user)

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    exercises: async () => {
        try {
            exercises = await Exercise.find()
            
            return exercises.map(exercise => transformExercise(exercise))
            
        } catch(e) {
            console.log(e)
            throw e
        }
    },
    myExercises: async (args, { headers }) => {
        try {
            const userId = getUserId(headers.authorization)

            const exercises = await Exercise.find({ owner: userId })
            return exercises.map(exercise => transformExercise(exercise))
        } catch(e) {
            console.log(e)
            throw e
        }
    },
}


module.exports = Query
