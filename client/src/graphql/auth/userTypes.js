import { gql, } from 'apollo-boost'

export const userTypes = gql`
    extend type Query {
        userToken: String!
        isLoggedIn: Boolean!
    }
    # extend type Mutation {
    #     login() 
    # }
`
