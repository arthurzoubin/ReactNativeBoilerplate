import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import createSagaMiddleware from 'redux-saga'
import { isEnv } from '../utils'

export const sagaMiddleware = createSagaMiddleware()
export const middleware = [
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
