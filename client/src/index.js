import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, } from 'styled-components'
import App from './App'
import 'normalize.css/normalize.css'
import './fonts/fonts.css'
import { GlobalStyle, Theme, } from './styled-components'
import './styled-components/globalStyle.css'


ReactDOM.render(
    <Router>
        <ThemeProvider theme={Theme}>
            <Route component={App} />
        </ThemeProvider>
    </Router>, 
    document.getElementById('root')
)
