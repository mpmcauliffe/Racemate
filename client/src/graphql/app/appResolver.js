import { useApolloClient, useQuery } from '@apollo/react-hooks'
import { GET_SINGLE_EXERCISE, } from './appRequests'


export const resolvers = {
    Query: {
        getSingleExercise: (_, args, { cache, }) => {
            console.log(args)
        }
    },
    Mutation: {
        setExercise: (_, args, { cache, }) => {
            console.log(args)
            const myExercises = cache.readFragment({ myExercises })
            //console.log(myExercises)
        },
        updateSet: (_, args, { cache, }) => {
            console.log(args.id)
            const x = cache.readQuery({ query: GET_SINGLE_EXERCISE })
            console.log(x)
            //const myExercises = cache.readFragment({ myExercises })
            //console.log(myExercises)
        },
    }
}
// const resolvers = {
//     Query: {
//       appBarColorSetting: () => userSettings.appBarColorSetting
//     },
//     Mutation: {
//       updateAppBarColorSetting: (_, { setting }) => {
//         userSettings.appBarColorSetting.setting = setting;
//         return userSettings.appBarColorSetting;
//       }
//     }
//   }

