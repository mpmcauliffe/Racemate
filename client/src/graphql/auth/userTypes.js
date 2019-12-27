import { gql, } from 'apollo-boost'

export const userTypes = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
    extend type Mutation {
        login() 
    }
`
