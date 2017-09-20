// @flow

import { StackNavigator } from 'react-navigation'
// Import routers
import Welcome from '../Welcome'
import TestPage from '../TestPage'

const routes = {
  Welcome: { screen: Welcome },
  TestPage: { screen: TestPage },
}

export const AppNavigator = StackNavigator(routes)
