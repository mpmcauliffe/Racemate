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
    
    const ownerInfo = await User.findById({ _id: exercise.owner })

    return {
        ...exercise._doc,
        id: exercise._doc._id.toString(),
        owner: {
            _id: ownerInfo._id,
            name: ownerInfo.name,
        }, 
    }
}


module.exports = transformExercise
