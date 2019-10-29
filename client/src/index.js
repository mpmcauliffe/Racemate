import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import 'normalize.css/normalize.css'
import './scss/index.scss'


ReactDOM.render(
    <Router>
        <Route component={App} />
    </Router>, 
    document.getElementById('root')
)
