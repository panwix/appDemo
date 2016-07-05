import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

class Search extends Component {
  render(){
    return (
      <View style={[styles.flex, styles.flexDirection]}>
        <View style={styles.flex}>
          <TextInput style={styles.input} returnKeyType='search'/>
        </View>
        <View style={styles.btn}>
          <Text style={styles.search}>搜索</Text>
        </View>
      </View>
    )
  }
}

class SearchView extends Component {
  render(){
    return (
      <View>
        <View style={[styles.flex, styles.topStatus]}>
          <Search></Search>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  topStatus: {
    marginTop: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  list_item_font: {
    fontSize: 16,
  }
})

AppRegistry.registerComponent('appDemo', () => SearchView)
