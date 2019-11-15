import { gql, } from 'apollo-boost'


export const REGISTER_USER = gql`
    mutation($name: String!, $email: String!, $password: String!) {
        createUser (
            data: {
                name: $name
                email: $email
                password: $password
            }
        ) {
            token
            user {
                name
                email
            }
        }
    }
`

export const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login (
            data: {
                email: $email,
                password: $password
            }
        ) {
            token
            user {
                name
                email
            }
        }
    }
`
