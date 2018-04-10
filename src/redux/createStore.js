import { applyMiddleware, createStore } from 'redux'
import createSageMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'

import tweetReducer from './tweet/tweetReducer'
import userReducer from './user/userReducer'
import categoryReducer from './category/categoryReducer'

import rootSaga from './rootSaga'

const rootReducer = combineReducers({
  router: routerReducer,
  tweet: tweetReducer,
  user: userReducer,
  category: categoryReducer
})

const history = createBrowserHistory()
const sagaMiddleware = createSageMiddleware()
const middleware = [routerMiddleware(history), sagaMiddleware, logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export { store, history }
