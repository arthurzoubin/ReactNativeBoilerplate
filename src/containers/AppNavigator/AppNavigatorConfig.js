// @flow

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export const FIRST_SCREEN = 'Welcome'

export const headerTitle = (headerText: string) => (
  <Text style={AppNavigatorStyles.headerTitleText}>{headerText}</Text>
)

export const headerRight = (text: string) => {
  return text !== null ? <View style={AppNavigatorStyles.headerRight}><Text>{text}</Text></View> : null
}

export const AppNavigatorStyles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  headerTitleText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    alignSelf: 'center',
  },
  headerRight: {
    width: 40,
  },
})
