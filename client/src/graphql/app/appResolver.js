import { useApolloClient, useQuery } from '@apollo/react-hooks'
import { GET_SINGLE_EXERCISE, } from './appRequests'


export const resolvers = {
    Mutation: {
        setExercise: (_, args, { cache, }) => {
            console.log(args)
            const myExercises = cache.readFragment({ myExercises })
            //console.log(myExercises)
        },
        updateSet: (_, args, { cache, }) => {
            console.log(args.id)
            const allExercises = cache.readQuery({ query: GET_SINGLE_EXERCISE })
            console.log(allExercises)
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

