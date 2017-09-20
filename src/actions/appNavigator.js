// @flow

/*
 * AppNavigator Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GO_TEST,
  LOADING,
} from '../constants/appNavigator'

/**
* Go to Test page
* @param routeName route name
* @return {object} An action object with a type of GO_TEST
*/
export const goTest = (routeName: string): Object => ({
  type: GO_TEST,
  payload: {
    routeName,
  },
})

/**
 * Toggle loading
 * @param loading
 * @return {object} An action object with a type of LOADING
 */
export const toggleLoading = (loading: boolean): Object => ({
  type: LOADING,
  payload: {
    loading,
  },
})
