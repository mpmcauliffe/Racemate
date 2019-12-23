import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'

//import AuthState from './context/user/AuthState'
//import setAuthToken from './utils/setAuthToken'

import { Home, Landing, } from './pages'
import { Nav, PrivateRoute, } from './components'


// if(localStorage.token) {
//     setAuthToken(localStorage.token)
// }

const App = () => {

    return (
        <Fragment>
            <Nav />

            <Switch>
                <Route /* PUBLIC */ 
                    exact
                    path='/'
                    component={Landing} />

                <Route /* PRIVATE */
                    exact
                    path='/home'
                    component={Home} />
            </Switch>
        </Fragment>
    )
}


export default App


        
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