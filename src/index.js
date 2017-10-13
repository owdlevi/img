import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

import App from './components/App'

const history = createHistory()
const middleware = applyMiddleware(
    routerMiddleware(history),
    reduxThunk
)

const store = createStore(combineReducers({
    reducers,
    routing: routerReducer
  }), {}, middleware)

render(
  <App store={store} />,
  document.querySelector('#root')
);
