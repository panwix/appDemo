import {Index} from './IndexForDemo2';
import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class NV extends Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '首页',
          component: Index,
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
AppRegistry.registerComponent('appDemo', () => NV);
