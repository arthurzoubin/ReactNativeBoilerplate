import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'
import Spinner from 'react-native-spinkit'

const LoadingSpinner = ({ type, size, color }) => (
  <View style={styles.container}>
    <View style={styles.coverBg}></View>
    <Spinner type={type} size={size} color={color} />
  </View>
)

LoadingSpinner.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default LoadingSpinner

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  coverBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
})
