/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'
import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from '../constants/homePage'
import { reposLoaded, repoLoadingError } from '../actions/homePage'

import { RequestClientClass as RequestClient } from '../utils/requestClient'
import { makeSelectUsername } from '../selectors/homePage'

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
  const username = yield select(makeSelectUsername())
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(getReposFunc, username)
    yield put(reposLoaded(repos, username))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos)

  // Suspend execution until location changes
  yield take([ LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR ])
  yield cancel(watcher)
}

// Bootstrap sagas
export const homePageSaga = [
  githubData,
]
