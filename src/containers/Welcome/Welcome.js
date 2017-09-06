import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { AppNavigatorStyles, headerTitle } from '../AppNavigator/AppNavigatorConfig'
import { goTest } from '../../actions/appNavigator'
class Welcome extends Component {
  static navigationOptions = {
    headerTitle: headerTitle('Welcome React Native'),
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

const mapStateToProps = () => ({})

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6391e7',
    borderWidth: 1,
    borderColor: '#6391e7',
    borderRadius: 2,
    width: 120,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
})
