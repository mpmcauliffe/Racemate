import { gql, } from 'apollo-boost'

export const userTypes = gql`
    extend type Query {
        userToken: String!
        isLoggedIn: Boolean!
    }
    extend type Mutation {
        login(Data: SendUserInfo!): LoginPayload! 
    }

    type SendUserInfo {
        email: String!
        password: String!
        name: String!
    }
    type LoginPayload {
        token: String!
    }
`
