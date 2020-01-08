import { Query, } from './auth/userResolver'

export * from './auth/userRequests'
export * from './auth/userTypes'


export const rootResolver = {
    ...Query,
}
