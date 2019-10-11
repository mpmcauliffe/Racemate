const users         = require('./Users')
const exercises     = require('./Exercises')


const rootResolver = {
    ...users,
    ...exercises,
}


module.exports = rootResolver
