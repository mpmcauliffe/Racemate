import { gql, } from 'apollo-boost'


export const GET_ALL_EXERCISES = gql`
    query {
        exercises {
            id
            title
            exerciseType
            description
            sets {
                date
                reps
                weight
            }
            owner {
                _id
                name
            }
        }
    }
`

export const GET_EXERCISES = gql`
    query {
        myExercises {
            id
            title
            exerciseType
            owner {
                _id
                name
            }	  	
        }
    }
`
export const GET_TOGGLE_STATUS = gql`
    query GetToggleStatus {
        userSelection @client
    }
`

// export const IS_LOGGED_IN = gql`
//     query GetIsLoggedIn {
//         isLoggedIn @client
//         #userToken @client
//     }
