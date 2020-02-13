import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, } from 'styled-components'

//import ApolloClient from 'apollo-boost'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as HookProvider  } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

import App from './App'
import { userTypes, appTypes, appResolver, } from './graphql'

import 'normalize.css/normalize.css'
import './global-styles/fonts/fonts.css'
import { Theme, } from './global-styles/styled-components/'
import './global-styles/styles/globalStyle.css'


const httpLink = createHttpLink({
    uri: '/graphql',
})
const cache = new InMemoryCache()
  
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ extensions }) => {
            console.log(extensions)
        })
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,),
        )
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`)
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    errorLink,
    cache,
    userTypes,
    appTypes,
    appResolver,
})
cache.writeData({ data: { isLoggedIn: !!localStorage.getItem('token'), } })


ReactDOM.render(
    <ApolloProvider client={client}>
        <HookProvider>
            <Router>
                <ThemeProvider theme={Theme}>
                    <Route component={App} />
                </ThemeProvider>
            </Router>
        </HookProvider>      
    </ApolloProvider>, 
    document.getElementById('root')
)


// qqwe$dq*C_7_eDZ