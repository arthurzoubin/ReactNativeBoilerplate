// @flow

/**
 * AppNavigator selectors
 */

import { Map } from 'immutable'
import { createSelector } from 'reselect'

type State = Map<string, any>

const selectAppNavigator = (state: State) => state.get('appNavigator')

const makeSelectLoading = () => createSelector(
  selectAppNavigator,
  (appNavigator) => appNavigator.get('loading')
)

export {
  selectAppNavigator,
  makeSelectLoading,
}
