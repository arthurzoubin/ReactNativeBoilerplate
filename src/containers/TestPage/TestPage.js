import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { changeUsername, loadRepos } from '../../actions/testPage'
import ReposList from './ReposList'
import { makeSelectUsername, makeSelectLoading, makeSelectError, makeSelectRepos } from '../../selectors/testPage'
import {
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
} from 'react-native'
import { AppNavigatorStyles } from '../AppNavigator/AppNavigatorConfig'

class TestPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Test',
    headerStyle: AppNavigatorStyles.header,
  })
  render() {
    const { username, onChangeUsername, onPresSubmit, repos, loading } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Type user name to get github repos.
        </Text>
        <View style={styles.formBox}>
          <View style={styles.row}>
            <Text style={styles.label}>
            User name:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              value={username}
              onChangeText={onChangeUsername}
            />
          </View>
          <TouchableOpacity
            onPress={onPresSubmit}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          repos ? <ReposList repos={repos} /> : null
        }
      </View>
    )
  }
}

TestPage.propTypes = {
  username: PropTypes.string,
}

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
export default connect(mapStateToProps, mapDispatchToProps)(TestPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 15,
  },
  formBox: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    lineHeight: 25,
    marginRight: 10,
  },
  input: {
    width: 200,
    height: 25,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000000',
    paddingLeft: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#6391e7',
    borderWidth: 1,
    borderColor: '#6391e7',
    borderRadius: 2,
    width: '100%',
  },
  buttonText: {
    lineHeight: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})
