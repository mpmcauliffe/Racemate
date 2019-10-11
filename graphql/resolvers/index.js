const queries       = require('./Queries')
const users         = require('./Users')
const exercises     = require('./Exercises')


const rootResolver = {
    ...queries,
    ...users,
    ...exercises,
}


module.exports = rootResolver
