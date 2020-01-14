import { gql, } from 'apollo-boost'


export const GET_EXERCISES = gql`
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
