const getUserId             = require('../../../helpers/getUserId')
const User                  = require('../../../models/User')
const Exercise              = require('../../../models/Exercise')


/* THIS UTILITY IS USED IN EXERCISE QUERY */
// type Exercise {
//     id: ID!
//     title: String!
//     exerciseType: String!
//     description: String
//     sets: [Set!]
//     notes: String
//     owner: User!
// }

const transformExercise = async exercise => {
    const userExercises = await User.find({ owner: user._id })

    return {
        ...exercise._doc,
        _id: exercise._doc._id.toString(),
        password: null,
        exercises: userExercises,
    }
}


module.exports = transformExercise
