const bcrypt                = require('bcryptjs')
const User                  = require('../../models/User')
const getUserId             = require('../../helpers/getUserId')
const generateToken         = require('../../helpers/generateToken')
const hashPassword          = require('../../helpers/hashPassword')


const Mutation = {
    async createUser(args) {
        try {
            const data = args.data

            const hashedPassword = await hashPassword(data.password)

            const emailInUse = await User.findOne({ email: data.email })
            if (emailInUse) {
                throw new Error('Email already in use')
            }

            const user = new User({
                name: data.name,
                email: data.email,
                password: hashedPassword,
            })

            const result = await user.save()

        
            return { //{ ...result._doc, password: null, _id: result.id }
                user,
                token: generateToken(user._id)
            }
        } catch(e) {
            console.log(e)
        }
    },
    // async createUser(parent, args, { prisma }, info) {
    //     const password = await hashPassword(args.data.password)
    //     const user = await prisma.mutation.createUser({
    //         data: {
    //             ...args.data,
    //             password
    //         }
    //     })

    //     return {
    //         user,
    //         token: generateToken(user.id)
    //     }
    // },
    // async login(parent, args, { prisma }, info) {
    //     const user = await prisma.query.user({
    //         where: {
    //             email: args.data.email
    //         }
    //     })

    //     if (!user) {
    //         throw new Error('Unable to login')
    //     }

    //     const isMatch = await bcrypt.compare(args.data.password, user.password)

    //     if (!isMatch) {
    //         throw new Error('Unable to login')
    //     }

    //     return {
    //         user,
    //         token: generateToken(user.id)
    //     }
    // },
    // async deleteUser(parent, args, { prisma, request }, info) {
    //     const userId = getUserId(request)

    //     return prisma.mutation.deleteUser({
    //         where: {
    //             id: userId
    //         }
    //     }, info)
    // },
    // async updateUser(parent, args, { prisma, request }, info) {
    //     const userId = getUserId(request)

    //     if (typeof args.data.password === 'string') {
    //         args.data.password = await hashPassword(args.data.password)
    //     }

    //     return prisma.mutation.updateUser({
    //         where: {
    //             id: userId
    //         },
    //         data: args.data
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


module.exports = Mutation
