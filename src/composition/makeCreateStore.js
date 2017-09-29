import { Map } from 'immutable'
import { compose, createStore as reduxCreatStore, applyMiddleware } from 'redux'
import { isEnv } from '../utils'
import { reactotronCreateStore } from './ReactotronConfig'
// @flow

let createStore = null

if(isEnv('development')) {
  createStore = reactotronCreateStore
} else {
  createStore = reduxCreatStore
}

export const makeCreateStore = (rootReducer:Object, initialState:Map, middleware:Array) => {
  const topLevelMiddleware = [ applyMiddleware(...middleware) ]
  return createStore(rootReducer, initialState, compose(...topLevelMiddleware))
}
