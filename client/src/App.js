import React from 'react'
import AlertState from './context/alert/AlertState'
//import { Home, Landing, } from './pages'
import { Nav, Lock, } from './components'


const App = () => {

    return (
        <AlertState>
            {/**<Nav /> */}
            

            {/**<Landing />**/}

            {/**<Home />**/}

            <Lock />            
        </AlertState>
    )
}


export default App



// <Switch>
//     <Route /* PUBLIC */ 
//         exact
//         path='/'
//         component={Landing} />

//     <Route /* PRIVATE */
//         exact
//         path='/home'
//         component={Home} />
// </Switch>
        
// <Route /* PUBLIC */ 
// exact
// path='/login'
// component={LoginComp} />

// <Route /* PUBLIC */ 
// exact
// path='/signup'
// component={Signup} />
//             const EX_QUERY = gql`
//     {
//         exercises {
//             id
//             title
//             exerciseType
//             description
//             sets {
//                 date
//                 reps
//                 weight
//             }
//             owner {
//                 _id
//                 name
//             }
//         }
//     }
// `

        // const data = props.data
        
        // if (data.loading) {
        //     return <div>Loading . . .</div>
        // } else {
        //     return data.exercises.map(exercise => {
        //         return (
        //             <Fragment key={exercise.id}>
        //                 <h2>{exercise.title}</h2>
        //                 <p>{exercise.description}</p>
        //             </Fragment>
        //         )
        //     })
        // }