import { combineReducers } from 'redux-immutable'

import { appNavigatorReducers as appNavigator } from './appNavigator.reducers'
import { testPageReducers as testPage } from './testPage.reducers'
export default combineReducers({
  appNavigator,
  testPage,
})
