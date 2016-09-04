import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'

const middlewares = [thunkMiddleware, routerMiddleware(hashHistory)]

if (process.env.NODE_ENV == 'dev') {
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware)
}

const createStoreWithMiddleware = applyMiddleware.apply(null, middlewares)(createStore)

export default function configureStore(appReducer, initialState) {
  return createStoreWithMiddleware(combineReducers({
    app: appReducer,
    routing: routerReducer
  }), initialState)
}
