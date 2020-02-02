const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const getUserId             = require('../../helpers/getUserId')


const exerciseResolver = {
    async createExercise(args, { headers }) {
        console.log(args.data)
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
    async updateExercise(args, { headers }) {
        const userId = getUserId(headers.authorization)
        console.log(args)
        //const isUserExercise = 
    },
}


module.exports = exerciseResolver
