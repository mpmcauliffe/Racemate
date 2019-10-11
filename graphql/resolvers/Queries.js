const getUserId             = require('../../helpers/getUserId')
const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const transformUser         = require('./utils/userTransform')


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
    exercises: async () => {
        try {
            exercises = await Exercise.find()
            
            return exercises.map(exercise)
            
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}


module.exports = Query
