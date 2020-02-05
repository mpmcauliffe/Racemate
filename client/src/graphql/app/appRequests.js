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
export const GET_EDIT_STATUS = gql`
    query GetModalStatus {
        isModalEdit @client
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
            owner {
                _id
            }
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
