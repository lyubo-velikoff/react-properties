import React from 'react'
import ReactDOM from 'react-dom'
import "./assets/styles/tailwind.scss"
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './service-worker/serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()