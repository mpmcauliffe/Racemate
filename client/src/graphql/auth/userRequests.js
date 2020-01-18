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
            error
        }
    }
`

// export const LOGIN = gql`
//     mutation(data: {
//         $email: String!, $password: String!
//     }) {
//         login (
//             data: {
//                 email: $email,
//                 password: $password
//             }
//         ) {
//             Login
//             token
//             error
//         }
//     }
// `

export const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login (
            data: {
                email: $email,
                password: $password
            }
        ) {
            token
            error
        }
    }
`

// export const LOGOUT = gql`
//     mutation
// `

export const IS_LOGGED_IN = gql`
    query GetIsLoggedIn {
        isLoggedIn @client
        #userToken @client
    }
`

// export const IS_LOGGED_IN = gql`
//     query isUserLoggedIn {
//         UserAuthStatus {
//             userToken @client
//             isLoggedIn @client
//         }
//     }
// ` 

// const { todo } = client.readQuery({
//     query: gql`
//       query ReadTodo {
//         todo(id: 5) {
//           id
//           text
//           completed
//         }
//       }
//     `,
//   });
