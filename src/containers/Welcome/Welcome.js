import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { AppNavigatorStyles } from '../AppNavigator/AppNavigatorConfig'
import { goTest } from '../../actions/appNavigator'
class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome React Native',
    headerStyle: AppNavigatorStyles.header,
  }

  render() {
    const { goTest } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is React Native Boilerplate
        </Text>
        <Text style={styles.instructions}>
          Click Test to have a try!
        </Text>
        <TouchableOpacity onPress={() => { goTest('TestPage') }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Test</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goTest: (routeName) => dispatch(goTest(routeName)),
})

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#6391e7',
    borderWidth: 1,
    borderColor: '#6391e7',
    borderRadius: 2,
  },
  buttonText: {
    width: 120,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})
