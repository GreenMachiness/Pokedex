import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const prepare = () => {
  if (process.env.NODE_ENV === 'development') {  // prevents the mock server from working in a deployed, production env
    const { worker } = require('./mocks/browser.js')
  return worker.start() // Comment out this return statement to disable the mock api
  }
  return Promise.resolve()
}

prepare().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
    <BrowserRouter> {/*opening tag*/}
      <App />
    </BrowserRouter> {/*closing tag*/}
    </React.StrictMode>
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()