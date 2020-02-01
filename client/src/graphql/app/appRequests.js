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
export const GET_MODAL_STATUS = gql`
    query GetModalStatus {
        modalStatus @client
    }
`
// title: "dumbell side bend",
//       exerciseType: "abs",
//       description: "AAAAAAAAAAAAAAAAAA no"
export const ADD_EXERCISE = gql`
    mutation($title: String!, $exerciseType: String!, $description: String) {
        createExercise(
            data: {
                title: $title,
                exerciseType: $exerciseType,
                description: $description
            }
        ) {
            id
            title
            exerciseType
        }
    }
`

// export const SUBSCRIBE_TOGGLE_STATUS = gql`
//     subscription {
//         userSelection @client
//     }
// `

// export const IS_LOGGED_IN = gql`
//     query GetIsLoggedIn {
//         isLoggedIn @client
//         #userToken @client
//     }
