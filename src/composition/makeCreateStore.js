// @flow

import { compose, createStore, applyMiddleware } from 'redux'

export const makeCreateStore = (middleware: Object[]) => {
  const topLevelMiddleware = [ applyMiddleware(...middleware) ]

  return compose(...topLevelMiddleware)(createStore)
}
