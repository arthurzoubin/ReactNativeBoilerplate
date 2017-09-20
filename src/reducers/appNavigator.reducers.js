// @flow

/*
 * AppNavigator Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, Map } from 'immutable'
import { NavigationActions } from 'react-navigation'
import {
  GO_TEST,
  LOADING,
} from '../constants/appNavigator'
import { FIRST_SCREEN } from '../containers/AppNavigator/AppNavigatorConfig'
import { AppNavigator } from '../containers/AppNavigator/AppNavigator'
const initialState = fromJS(AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(FIRST_SCREEN)))
  .set('loading', false)

type State = Map<string, any>

export const appNavigatorReducers = (state: State = initialState, action: Object) => {
  switch(action.type) {
    case LOADING:
      return state.set('loading', action.payload.loading)
    case GO_TEST:
      return state.merge(AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.payload.routeName }),
        state.toJS()
      ))
    case NavigationActions.BACK:
      return state.merge(AppNavigator.router.getStateForAction(
        NavigationActions.back({ routeName: FIRST_SCREEN }),
        state.toJS()
      ))
    default:
      return state
  }
}
