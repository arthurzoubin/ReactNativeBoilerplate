// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { AppNavigator } from './AppNavigator'

const AppNavigatorContainer = ({ dispatch, appNavigator }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: appNavigator })} />
)

AppNavigatorContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  appNavigator: state.get('appNavigator'),
})

export default connect(mapStateToProps)(AppNavigatorContainer)
