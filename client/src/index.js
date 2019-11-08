import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import 'normalize.css/normalize.css'
import './fonts/fonts.css'
import { GlobalStyle, Theme, } from './styled-components'
import './styled-components/globalStyle.css'


const client = new ApolloClient({
    uri: '/graphql',
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ThemeProvider theme={Theme}>
                <Route component={App} />
            </ThemeProvider>
        </Router>
    </ApolloProvider>, 
    document.getElementById('root')
)
