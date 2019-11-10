import React, { Fragment, } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, Signup, } from './pages'
import { Nav, } from './components'

import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'



const EX_QUERY = gql`
    {
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

const App = props => {

        const data = props.data

        console.log(data)

        
        if (data.loading) {
            return <div>Loading . . .</div>
        } else {
            return data.exercises.map(exercise => {
                return (
                    <Fragment key={exercise.id}>
                        <h2>{exercise.title}</h2>
                        <p>{exercise.description}</p>
                    </Fragment>
                )
            })
        }
}

//const App = graphql(EX_QUERY)(AppComp)

export default graphql(EX_QUERY)(App)


/**
 * <Query query={EX_QUERY}>
                {
                    ({ loading, error, data, }) => {
                        if (loading) return <h3>LOADING . . .</h3>
                        if (error) console.log(error)

                        return (
                            <Fragment>
                                {data.exercises.map(exercise => (
                                    <h2>exercise.title</h2>
                                ))}
                            </Fragment>
                        )
                    }
                }
            </Query>*/

        //     <Fragment>
        //     <Nav />

        //     <div>
        //         {() => displayExercises()}
        //     </div>
        //     <Switch>
        //         <Route /* PUBLIC */ 
        //             exact
        //             path='/login'
        //             component={Login} />

        //         <Route /* PUBLIC */ 
        //             exact
        //             path='/signup'
        //             component={Signup} />
        //     </Switch>
        // </Fragment>
 