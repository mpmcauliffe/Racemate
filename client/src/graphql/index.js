export * from './auth/userQueues'
export * from './auth/userTypes'


import users from './auth/userResolver'

export const rootResolver = {
    ...users,
}
