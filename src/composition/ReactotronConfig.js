import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import { isEnv } from '../utils'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // and redux-logger
  .use(sagaPlugin()) // and saga

let reactotronCreateStore = null
let sagaMonitor = null

if(isEnv('development')) {
  reactotronCreateStore = Reactotron.createStore
  sagaMonitor = Reactotron.createSagaMonitor()
  Reactotron.connect() // let's connect!
}

export {
  reactotronCreateStore,
  sagaMonitor,
}
