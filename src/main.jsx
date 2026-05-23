import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './app/store'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>     // Redux store is available everywhere
      <App />                      // your app start here
    </Provider>
  </React.StrictMode>,
)
