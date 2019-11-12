import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Landing, Login, Signup, } from './pages'
import { Nav, PrivateRoute, } from './components'


const App = () => {

    return (
        <Fragment>
            <Nav />

            <Switch>
                <Route /* PUBLIC */ 
                    exact
                    path='/'
                    component={Landing} />

                <Route /* PUBLIC */ 
                    exact
                    path='/login'
                    component={Login} />

                <Route /* PUBLIC */ 
                    exact
                    path='/signup'
                    component={Signup} />

                <PrivateRoute /* PRIVATE */
                    exact
                    path='/home'
                    component={Home} />
            </Switch>
        </Fragment>
    )
}


export default App


        
 
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