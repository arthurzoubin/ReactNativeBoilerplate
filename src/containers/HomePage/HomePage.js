import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { changeUsername, loadRepos } from '../../actions/homePage'
import { makeSelectUsername, makeSelectLoading, makeSelectError, makeSelectRepos } from '../../selectors/homePage'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'

class HomePage extends Component {
  render() {
    const { username, onChangeUsername, onPresSubmit, repos, loading } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          There is a Test
        </Text>
        <Text style={styles.instructions}>
          Type user name to get github repos.
        </Text>
        <Text style={styles.instructions}>
        User name:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={username}
          onChangeText={onChangeUsername}
        />
        <TouchableOpacity
          onPress={onPresSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          loading: {JSON.stringify(loading)}
        </Text>
        <Text style={styles.instructions}>
          repos: {JSON.stringify(repos)}
        </Text>
      </View>
    )
  }
}

HomePage.propTypes = {
  username: PropTypes.string,
}

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
  input: {
    width: 200,
    height: 25,
    borderWidth: 1,
    borderColor: '#000000',
  }
})

const mapDispatchToProps = dispatch => ({
  onChangeUsername: (text) => dispatch(changeUsername(text)),
  onPresSubmit: () => {
    dispatch(loadRepos())
  },
})

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  repos: makeSelectRepos(),
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
