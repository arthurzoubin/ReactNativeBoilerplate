import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { addNavigationHelpers } from 'react-navigation'
import { AppNavigator } from './AppNavigator'
import { selectAppNavigator, makeSelectLoading } from '../../selectors/appNavigator'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const AppNavigatorWapper = ({ dispatch, nav, loading }) => {
  return (
    <View style={styles.container}>
      <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav.toJS() })} />
      {
        loading ? <LoadingSpinner type={`Circle`} size={30} color={`#000000`} /> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})

const mapStateToProps = () => createStructuredSelector({
  nav: selectAppNavigator,
  loading: makeSelectLoading(),
})

export default connect(mapStateToProps)(AppNavigatorWapper)
