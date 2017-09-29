import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import createSagaMiddleware from 'redux-saga'
import { sagaMonitor } from './ReactotronConfig'
import { isEnv } from '../utils'
// @flow

export let reactotronCreateStore: Object = {}
export let sagaMiddleware: Object = {}
export const middleware: Array = []
if(isEnv('development')) {
  middleware.push(
    createLogger({
      collapsed: true,
    })
  )
  // Reactotron
  // create our new saga monitor
  sagaMiddleware = createSagaMiddleware({ sagaMonitor })
} else {
  sagaMiddleware = createSagaMiddleware()
}

middleware.push(
  promiseMiddleware(),
  sagaMiddleware,
)
