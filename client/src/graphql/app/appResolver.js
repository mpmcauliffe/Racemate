//import { useMutation } from '@apollo/react-hooks'



export const appResolver = {
    Mutation: {
        setExercise: (_, args, { cache, }) => {
            console.log(args)
            //const myExercises = cache.readFragment({ myExercises })
            //console.log(myExercises)
        }
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

