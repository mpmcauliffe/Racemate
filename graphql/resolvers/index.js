const queries       = require('./Queries')
const users         = require('./Users')
const exercises     = require('./Exercises')
const workouts      = require('./Workout')


const rootResolver = {
    ...queries,
    ...users,
    ...exercises,
    ...workouts,
}


module.exports = rootResolver
