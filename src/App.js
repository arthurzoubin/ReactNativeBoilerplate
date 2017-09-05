import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './composition/store'
import { sagaMiddleware } from './composition/middleware'
import rootSaga from './sagas'

// If rootSaga is array, run each
rootSaga.length > 0?rootSaga.map(sagaMiddleware.run):null

import AppNavigatorWapper from './containers/AppNavigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigatorWapper />
      </Provider>
    )
  }
}