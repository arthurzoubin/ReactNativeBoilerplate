// @flow

/**
 * TestPage selectors
 */

import { Map } from 'immutable'
import { createSelector } from 'reselect'

type State = Map<string, any>

const selectTestPage = (state: State) => state.get('testPage')

const makeSelectUsername = () => createSelector(
  selectTestPage,
  (testPageState) => testPageState.get('username')
)

const makeSelectLoading = () => createSelector(
  selectTestPage,
  (testPageState) => testPageState.get('loading')
)

const makeSelectError = () => createSelector(
  selectTestPage,
  (testPageState) => testPageState.get('error')
)

const makeSelectRepos = () => createSelector(
  selectTestPage,
  (testPageState) => testPageState.getIn([ 'userData', 'repositories' ])
)

export {
  selectTestPage,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
}
