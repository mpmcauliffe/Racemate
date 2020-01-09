const bcrypt                = require('bcryptjs')
const User                  = require('../../models/User')
const getUserId             = require('../../helpers/getUserId')
const generateToken         = require('../../helpers/generateToken')
const hashPassword          = require('../../helpers/hashPassword')


const userResolver = {
    async createUser(args) {
        try {
            const data = args.data
            console.log(data)
            const hashedPassword = await hashPassword(data.password)

            const emailInUse = await User.findOne({ email: data.email })
            if (emailInUse) {
                throw new Error('Email already in use')
            }

            let user = new User({
                name: data.name,
                email: data.email,
                password: hashedPassword,
            })

            const result = await user.save()

            console.log(result)
            //user = { ...user, password: null, }
        
            return { //{ ...result._doc, password: null, _id: result.id },
                //user,
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
            throw new Error('Unable to login')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Unable to login')
        }

        return {
            //user,
            token: generateToken(user.id)
        }
    },
    async updateUser(args, { headers }) {
        const userId = getUserId(headers.authorization)

        if (typeof args.data.password === 'string') {
            args.data.password = await hashPassword(args.data.password)
        }

        const user = await User.findById(userId)

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
