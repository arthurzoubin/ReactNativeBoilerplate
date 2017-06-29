import { combineReducers } from 'redux-immutable'

import { homePageReducers as homePage } from './homePage.reducers'

export default combineReducers({
  homePage,
})
