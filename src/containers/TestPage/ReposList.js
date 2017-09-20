// @flow

import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'

const keyExtractor = (item , index ) => index

const renderItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.item}>{item.full_name}</Text>
    </View>
  )
}

const ReposList = ({ repos }: Object) => (
  <View style={styles.container}>
    <Text style={styles.title}>Repositories</Text>
    <View style={styles.list}>
      <FlatList
        data={repos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  </View>
)

export default ReposList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  list: {
    height: '70%',
  },
  item: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 15,
  },
})
