const bcrypt                = require('bcryptjs')
const User                  = require('../../models/User')
const getUserId             = require('../../helpers/getUserId')
const generateToken         = require('../../helpers/generateToken')
const hashPassword          = require('../../helpers/hashPassword')


const userResolver = {
    async createUser(args) {
        try {
            const data = args.data
            //console.log(data)
            const hashedPassword = await hashPassword(data.password)

            const emailInUse = await User.findOne({ email: data.email })

            if (emailInUse) {
                return { error: 'Email already in use!' }
            }

            let user = new User({
                name: data.name,
                email: data.email,
                password: hashedPassword,
            })

            const result = await user.save()
        
            return { //{ ...result._doc, password: null, _id: result.id },
                token: generateToken(user._id)
            }
            
        } catch(e) {
            console.log(e)
            throw e
        }
    },
    async login(args) {
        const { email, password, } = args.data

        const user = await User.findOne({ email: email })
        if (!user) {
            return { error: 'Unable to login' }
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return { error: 'Unable to login' }
        }

        return {
            token: generateToken(user.id)
        }
    },
    async updateUser(args, { headers }) {
        const userId = getUserId(headers.authorization)
console.log('AAAAAAAAAA')
        console.log(args.data, userId)
        

        // const user = await User.findByIdAndUpdate(
        //     userId,
        //     { $set: params.id }
        // )

        // return prisma.mutation.updateUser({
        //     where: {
        //         id: userId
        //     },
        //     data: args.data
        // }, info)
    },
    // async deleteUser(parent, args, { prisma, request }, info) {
    //     const userId = getUserId(request)

    //     return prisma.mutation.deleteUser({
    //         where: {
    //             id: userId
    //         }
    //     }, info)
    // },

    // createExercise(parent, args, { prisma, request, }, info) {
    //     const userId = getUserId(request)
    //     const { title, exerciseType, description, sets, notes, } = args.data


    //     return prisma.mutation.createExercise({
    //         data: {
    //             title,
    //             exerciseType,
    //             description,
    //             sets,
    //             notes,
    //             owner: {
    //                 connect: {
    //                     id: userId
    //                 }
    //             }
    //         }
    //     }, info)
    // },
    // async deleteExercise(parent, args, { prisma, request, }, info) {
    //     const userId = getUserId(request)
    //     const exerciseExists = await prisma.exists.Exercise({
    //         id: args.id,
    //         owner: {
    //             id: userId
    //         }
    //     })

    //     if (!exerciseExists) {
    //         throw new Error('Unable to delete exercise!')
    //     }
        
    //     return prisma.mutation.deleteExercise({
    //         where: {
    //             id: args.id
    //         }
    //     }, info)
    // },
    // updateExercise(parent, args, { prisma, request, }, info) {

    // }
}


module.exports = userResolver
