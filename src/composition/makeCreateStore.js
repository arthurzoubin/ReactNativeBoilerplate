import { Map } from 'immutable'
import { compose, createStore as reduxCreatStore, applyMiddleware } from 'redux'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import { isEnv } from '../utils'
// @flow

let createStore = null

if(isEnv('development')) {
  Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux()) // and redux-logger
    .connect() // let's connect!
  createStore = Reactotron.createStore
} else {
  createStore = reduxCreatStore
}

export const makeCreateStore = (rootReducer:Object, initialState:Map, middleware:Array) => {
  const topLevelMiddleware = [ applyMiddleware(...middleware) ]
  return createStore(rootReducer, initialState, compose(...topLevelMiddleware))
}
