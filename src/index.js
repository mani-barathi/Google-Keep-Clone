import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import StateProvider from "./StateContext"
import { initialState, reducer } from "./stateReducer"

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
