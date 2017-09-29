import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import createSagaMiddleware from 'redux-saga'
import { isEnv } from '../utils'
// @flow

export const sagaMiddleware: Object = createSagaMiddleware()
export const middleware: Array = [
  promiseMiddleware(),
  sagaMiddleware,
]

if(isEnv('development')) {
  middleware.push(
    createLogger({
      collapsed: true,
    })
  )
}
