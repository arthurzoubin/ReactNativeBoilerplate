import { combineReducers } from 'redux-immutable'

import { appNavigatorReducers as appNavigator } from './appNavigator.reducers'
import { homePageReducers as homePage } from './homePage.reducers'

export default combineReducers({
  //appNavigator,
  homePage,
})
