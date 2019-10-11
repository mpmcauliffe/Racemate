const bcrypt                = require('bcryptjs')
const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const getUserId             = require('../../helpers/getUserId')


const Mutation = {
    async createExercise(args, { headers }) {
        
        const userId = getUserId(headers.authorization)
        const { title, exerciseType, description, sets, notes, } = args.data
        
        const exercise = new Exercise({
            title,
            exerciseType,
            description,
            sets,
            notes,
            owner: userId,
        })

        let createdExercise
        try {
            const result = await exercise.save()
            const owner = await User.findById(userId)
            
            if (!owner) {
                throw new Error('User not found!')
            }
            
            owner.exercises.push(exercise)
            await owner.save()

            return exercise

        } catch(e) {
            console.log(e)
            throw e
        }
    },
}


module.exports = Mutation
