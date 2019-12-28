import { users, } from './auth/userResolver'

export * from './auth/userQueues'
export * from './auth/userTypes'


export const rootResolver = {
    ...users,
}
