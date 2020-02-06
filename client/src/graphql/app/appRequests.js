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
            description
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
export const GET_EDIT_STATUS = gql`
    query GetModalStatus {
        isModalEdit @client
    }
`
export const GET_EDIT_ID = gql`
    query GetModalStatus {
        editExerciseId @client
    }
`
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
            description
            owner {
                _id
            }
        }
    }
`
export const EDIT_EXERCISE = gql`
    mutation($title: String, $exerciseType: String, $description: String, $id: String) {
        editExercise (
            data: {
                title: $title
                exerciseType: $exerciseType
                description: $description
                id: $id
            }
        ) {
            title
            exerciseType
            description
            id 
        }
    }
`
export const DELETE_EXERCISE = gql`
    mutation($id: ID!) {
        deleteExercise (id: $id) {
            id
        }
    }
`
export const SET_EXERCISE = gql`
    mutation($data: Exercise!) {
        setExercise(data: $Exercise) {
            Exercise @client
        } 
    } 
`
// const ITEM_DELETE = gql`
//   mutation ItemDelete($id: ID!) {
//     itemDelete(id: $id) {
//       id
//     }
//   }
// `

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

// export const GET_SINGE_EXERCISE = gql`
//     query getSingleExercise($id: String!) {
//         myExercises {
//             Exercise(id: $id) {
//                 title
//                 exerciseType
//                 description
//             }
//         }
//     }
// `