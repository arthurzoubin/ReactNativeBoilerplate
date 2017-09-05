/**
 * AppNavigator selectors
 */

 import { createSelector } from 'reselect'

 const selectAppNavigator = (state) => state.get('appNavigator')

 const makeSelectLoading = () => createSelector(
   selectAppNavigator,
   (appNavigator) => appNavigator.get('loading')
 )

 export {
   selectAppNavigator,
   makeSelectLoading,
 }
