/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects'
import { LOAD_REPOS } from '../constants/testPage'
import { reposLoaded, repoLoadingError } from '../actions/testPage'
import { toggleLoading } from '../actions/appNavigator'

import { RequestClientClass as RequestClient } from '../utils/requestClient'
import { makeSelectUsername } from '../selectors/testPage'

const requestClient = () => new RequestClient('https://api.github.com/')

const getReposFunc = username => {
  return requestClient()
    .setUri(`users/${username}/repos?type=all&sort=updated`)
    .doGet()
}

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  yield put(toggleLoading(true))
  const username = yield select(makeSelectUsername())
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(getReposFunc, username)
    yield put(reposLoaded(repos, username))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
  yield put(toggleLoading(false))
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield takeLatest(LOAD_REPOS, getRepos)
}

// Bootstrap sagas
export const testPageSaga = [
  githubData,
]
