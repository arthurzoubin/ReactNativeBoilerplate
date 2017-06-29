import { compose, createStore, applyMiddleware } from 'redux'

export const makeCreateStore = (middleware) => {
  const topLevelMiddleware = [ applyMiddleware(...middleware) ]

  return compose(...topLevelMiddleware)(createStore)
}
